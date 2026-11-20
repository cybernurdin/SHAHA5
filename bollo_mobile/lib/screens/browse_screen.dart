import 'package:flutter/material.dart';
import '../data/mock_data.dart';
import '../models/models.dart';
import '../widgets/service_card.dart';
import '../widgets/booking_sheet.dart';
import 'detail_screen.dart';

class BrowseScreen extends StatefulWidget {
  final String? initialCategory;

  const BrowseScreen({super.key, this.initialCategory});

  @override
  State<BrowseScreen> createState() => _BrowseScreenState();
}

class _BrowseScreenState extends State<BrowseScreen> {
  late String _selectedCategory;
  String _selectedCity = 'All Cameroon';
  String _priceFilter = 'any';
  double _minRating = 0;
  String _searchQuery = '';

  @override
  void initState() {
    super.initState();
    _selectedCategory = widget.initialCategory ?? 'all';
  }

  List<ServiceListing> get _results {
    return BolloData.listings.where((s) {
      final matchesCat = _selectedCategory == 'all' || s.categoryId == _selectedCategory;
      final matchesCity = _selectedCity == 'All Cameroon' || s.city.toLowerCase() == _selectedCity.toLowerCase();
      final matchesQuery = _searchQuery.isEmpty ||
          s.title.toLowerCase().contains(_searchQuery.toLowerCase()) ||
          s.neighborhood.toLowerCase().contains(_searchQuery.toLowerCase()) ||
          s.provider.name.toLowerCase().contains(_searchQuery.toLowerCase());

      bool matchesPrice = true;
      if (_priceFilter == '15000') matchesPrice = s.priceXaf <= 15000;
      if (_priceFilter == '25000') matchesPrice = s.priceXaf <= 25000;
      if (_priceFilter == '50000') matchesPrice = s.priceXaf <= 50000;

      final matchesRating = _minRating == 0 || s.rating >= _minRating;

      return matchesCat && matchesCity && matchesQuery && matchesPrice && matchesRating;
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
        title: const Text(
          'Find Services in Cameroon',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF0F172A)),
        ),
      ),
      body: Column(
        children: [
          // Filter Bar
          Container(
            color: Colors.white,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            child: Column(
              children: [
                // Search Input
                TextField(
                  onChanged: (val) => setState(() => _searchQuery = val),
                  decoration: InputDecoration(
                    hintText: 'Search service, task or technician...',
                    hintStyle: TextStyle(fontSize: 13, color: Colors.grey.shade400),
                    prefixIcon: const Icon(Icons.search, size: 20, color: Color(0xFF0D7377)),
                    filled: true,
                    fillColor: const Color(0xFFF1F5F9),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                    contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    isDense: true,
                  ),
                ),
                const SizedBox(height: 10),

                // Filter Pills Row (Town & Price)
                SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: [
                      // Town Dropdown chip
                      PopupMenuButton<String>(
                        initialValue: _selectedCity,
                        onSelected: (val) => setState(() => _selectedCity = val),
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: _selectedCity != 'All Cameroon' ? const Color(0xFF0D7377) : const Color(0xFFF1F5F9),
                            borderRadius: BorderRadius.circular(20),
                          ),
                          child: Row(
                            children: [
                              Icon(Icons.location_on, size: 14, color: _selectedCity != 'All Cameroon' ? Colors.white : const Color(0xFF475569)),
                              const SizedBox(width: 4),
                              Text(
                                _selectedCity,
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.bold,
                                  color: _selectedCity != 'All Cameroon' ? Colors.white : const Color(0xFF475569),
                                ),
                              ),
                              const Icon(Icons.arrow_drop_down, size: 16),
                            ],
                          ),
                        ),
                        itemBuilder: (_) => BolloData.cities
                            .map((c) => PopupMenuItem(value: c, child: Text(c, style: const TextStyle(fontSize: 13))))
                            .toList(),
                      ),
                      const SizedBox(width: 8),

                      // Price Filter
                      PopupMenuButton<String>(
                        initialValue: _priceFilter,
                        onSelected: (val) => setState(() => _priceFilter = val),
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: _priceFilter != 'any' ? const Color(0xFF0D7377) : const Color(0xFFF1F5F9),
                            borderRadius: BorderRadius.circular(20),
                          ),
                          child: Row(
                            children: [
                              Text(
                                _priceFilter == 'any' ? 'Any Price' : '< $_priceFilter XAF',
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.bold,
                                  color: _priceFilter != 'any' ? Colors.white : const Color(0xFF475569),
                                ),
                              ),
                              const Icon(Icons.arrow_drop_down, size: 16),
                            ],
                          ),
                        ),
                        itemBuilder: (_) => [
                          const PopupMenuItem(value: 'any', child: Text('Any Price')),
                          const PopupMenuItem(value: '15000', child: Text('Under 15,000 XAF')),
                          const PopupMenuItem(value: '25000', child: Text('Under 25,000 XAF')),
                          const PopupMenuItem(value: '50000', child: Text('Under 50,000 XAF')),
                        ],
                      ),
                      const SizedBox(width: 8),

                      // Rating 4.5+
                      FilterChip(
                        label: const Text('★ 4.5+'),
                        selected: _minRating >= 4.5,
                        onSelected: (selected) => setState(() => _minRating = selected ? 4.5 : 0),
                        selectedColor: const Color(0xFFF0FDFA),
                        labelStyle: TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                          color: _minRating >= 4.5 ? const Color(0xFF0D7377) : const Color(0xFF475569),
                        ),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          // Results counter
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 8),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  '${_results.length} Verified Providers',
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Color(0xFF475569)),
                ),
                if (_selectedCity != 'All Cameroon' || _selectedCategory != 'all' || _priceFilter != 'any')
                  GestureDetector(
                    onTap: () => setState(() {
                      _selectedCity = 'All Cameroon';
                      _selectedCategory = 'all';
                      _priceFilter = 'any';
                      _minRating = 0;
                      _searchQuery = '';
                    }),
                    child: const Text('Reset', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF0D7377))),
                  ),
              ],
            ),
          ),

          // Service Card List
          Expanded(
            child: _results.isEmpty
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Icon(Icons.search_off, size: 48, color: Colors.grey),
                        SizedBox(height: 12),
                        Text('No verified professionals match these filters', style: TextStyle(color: Color(0xFF64748B))),
                      ],
                    ),
                  )
                : ListView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: _results.length,
                    itemBuilder: (ctx, i) {
                      final s = _results[i];
                      return ServiceCard(
                        service: s,
                        onTap: () => _openDetail(s),
                        onBook: () => _openBookingSheet(s),
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}
