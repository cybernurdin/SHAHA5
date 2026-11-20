import 'package:flutter/material.dart';
import '../data/mock_data.dart';
import '../models/models.dart';
import '../widgets/service_card.dart';
import '../widgets/booking_sheet.dart';
import 'detail_screen.dart';

class HomeScreen extends StatefulWidget {
  final Function(String categoryId)? onSelectCategory;
  final VoidCallback? onPostTask;

  const HomeScreen({super.key, this.onSelectCategory, this.onPostTask});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _selectedCity = 'All Cameroon';
  String _searchQuery = '';

  List<ServiceListing> get _filteredServices {
    return MboaData.listings.filter((s) {
      final matchesCity = _selectedCity == 'All Cameroon' || s.city.toLowerCase() == _selectedCity.toLowerCase();
      final matchesQuery = _searchQuery.isEmpty ||
          s.title.toLowerCase().contains(_searchQuery.toLowerCase()) ||
          s.neighborhood.toLowerCase().contains(_searchQuery.toLowerCase()) ||
          s.provider.name.toLowerCase().contains(_searchQuery.toLowerCase());
      return matchesCity && matchesQuery;
    }).toList();
  }

  void _openBookingSheet(ServiceListing service) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => BookingSheet(service: service),
    );
  }

  void _openDetail(ServiceListing service) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => DetailScreen(service: service),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0.5,
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(
                color: const Color(0xFFEFF6FF),
                borderRadius: BorderRadius.circular(10),
              ),
              child: const Icon(Icons.handyman, color: Color(0xFF1E40AF), size: 22),
            ),
            const SizedBox(width: 8),
            RichText(
              text: const TextSpan(
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: Color(0xFF0F172A)),
                children: [
                  TextSpan(text: 'MboaWork'),
                  TextSpan(text: '.work', style: TextStyle(color: Color(0xFF1E40AF))),
                ],
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications_none, color: Color(0xFF334155)),
            onPressed: () {},
          ),
        ],
      ),
      body: CustomScrollView(
        slivers: [
          // Hero & Search Header
          SliverToBoxAdapter(
            child: Container(
              color: Colors.white,
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Country Pill
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: const Color(0xFFEFF6FF),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: const [
                        Text('🇨🇲', style: TextStyle(fontSize: 12)),
                        SizedBox(width: 6),
                        Text(
                          '500+ Verified Service Pros in Cameroon',
                          style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF1E40AF)),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 10),

                  // Heading
                  const Text(
                    'Trusted Professionals\nfor Every Task',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFF0F172A),
                      height: 1.15,
                    ),
                  ),
                  const SizedBox(height: 14),

                  // Search Bar Pill
                  Container(
                    decoration: BoxDecoration(
                      color: const Color(0xFFF8FAFC),
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: Colors.grey.shade300),
                    ),
                    child: TextField(
                      onChanged: (val) => setState(() => _searchQuery = val),
                      decoration: InputDecoration(
                        hintText: 'Search service, AC technician, plumber...',
                        hintStyle: TextStyle(fontSize: 13, color: Colors.grey.shade500),
                        prefixIcon: const Icon(Icons.search, color: Color(0xFF1E40AF)),
                        suffixIcon: _searchQuery.isNotEmpty
                            ? IconButton(
                                icon: const Icon(Icons.clear, size: 18),
                                onPressed: () => setState(() => _searchQuery = ''),
                              )
                            : null,
                        border: InputBorder.none,
                        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Cameroon Towns Chips Bar
          SliverToBoxAdapter(
            child: Container(
              color: Colors.white,
              padding: const EdgeInsets.only(bottom: 12),
              child: SizedBox(
                height: 40,
                child: ListView.separated(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  itemCount: MboaData.cities.length,
                  separatorBuilder: (_, __) => const SizedBox(width: 8),
                  itemBuilder: (ctx, i) {
                    final city = MboaData.cities[i];
                    final isSelected = _selectedCity == city;
                    return ChoiceChip(
                      label: Text(city),
                      selected: isSelected,
                      onSelected: (val) {
                        if (val) setState(() => _selectedCity = city);
                      },
                      selectedColor: const Color(0xFF1E40AF),
                      backgroundColor: const Color(0xFFF1F5F9),
                      labelStyle: TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                        color: isSelected ? Colors.white : const Color(0xFF475569),
                      ),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                      side: BorderSide.none,
                    );
                  },
                ),
              ),
            ),
          ),

          // Category Carousel
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 20, 16, 12),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'Explore Categories',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xFF0F172A)),
                  ),
                  Text(
                    '${MboaData.categories.length} Sectors',
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.grey.shade500),
                  ),
                ],
              ),
            ),
          ),

          SliverToBoxAdapter(
            child: SizedBox(
              height: 104,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                itemCount: MboaData.categories.length,
                separatorBuilder: (_, __) => const SizedBox(width: 12),
                itemBuilder: (ctx, i) {
                  final cat = MboaData.categories[i];
                  return GestureDetector(
                    onTap: () {
                      if (widget.onSelectCategory != null) {
                        widget.onSelectCategory!(cat.id);
                      }
                    },
                    child: Container(
                      width: 110,
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: Colors.grey.shade200),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(
                              color: const Color(0xFFEFF6FF),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: const Icon(Icons.handyman, color: Color(0xFF1E40AF), size: 20),
                          ),
                          const SizedBox(height: 6),
                          Text(
                            cat.name,
                            textAlign: TextAlign.center,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF0F172A)),
                          ),
                          Text(
                            '${cat.count} Pros',
                            style: TextStyle(fontSize: 10, color: Colors.grey.shade500),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ),
          ),

          // Post a Task Quick Banner
          SliverToBoxAdapter(
            child: Container(
              margin: const EdgeInsets.fromLTRB(16, 20, 16, 12),
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF1E40AF), Color(0xFF1E3A8A)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Need a Custom Task Done?',
                          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                        ),
                        const SizedBox(height: 4),
                        const Text(
                          'Tell us what you need, get competitive offers from local pros.',
                          style: TextStyle(fontSize: 11, color: Colors.white70),
                        ),
                        const SizedBox(height: 12),
                        ElevatedButton(
                          onPressed: widget.onPostTask,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.white,
                            foregroundColor: const Color(0xFF1E40AF),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                            elevation: 0,
                          ),
                          child: const Text('Post Task for Free', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 8),
                  Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.15),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(Icons.add_task, color: Colors.white, size: 32),
                  ),
                ],
              ),
            ),
          ),

          // Featured Service Listings Header
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 16, 16, 12),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'Featured in $_selectedCity',
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xFF0F172A)),
                  ),
                  Text(
                    '${_filteredServices.length} Results',
                    style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: Color(0xFF1E40AF)),
                  ),
                ],
              ),
            ),
          ),

          // Services List
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            sliver: SliverList(
              delegate: SliverChildBuilderDelegate(
                (ctx, i) {
                  final s = _filteredServices[i];
                  return ServiceCard(
                    service: s,
                    onTap: () => _openDetail(s),
                    onBook: () => _openBookingSheet(s),
                  );
                },
                childCount: _filteredServices.length,
              ),
            ),
          ),

          const SliverToBoxAdapter(child: SizedBox(height: 30)),
        ],
      ),
    );
  }
}

extension FilterExt<T> on List<T> {
  Iterable<T> filter(bool Function(T element) test) sync* {
    for (T element in this) {
      if (test(element)) yield element;
    }
  }
}
