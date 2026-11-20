import 'package:flutter/material.dart';
import '../data/mock_data.dart';
import '../models/models.dart';

class BookingsScreen extends StatefulWidget {
  const BookingsScreen({super.key});

  @override
  State<BookingsScreen> createState() => _BookingsScreenState();
}

class _BookingsScreenState extends State<BookingsScreen> {
  final List<TaskBooking> _bookings = List.from(MboaData.sampleBookings);

  Color _getStatusColor(String status) {
    switch (status) {
      case 'Confirmed':
        return const Color(0xFF10B981);
      case 'In Progress':
        return const Color(0xFF1E40AF);
      case 'Completed':
        return const Color(0xFF64748B);
      default:
        return const Color(0xFFF59E0B);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0.5,
        title: const Text(
          'My Tasks & Bookings',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF0F172A)),
        ),
      ),
      body: _bookings.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.calendar_today_outlined, size: 48, color: Colors.grey),
                  SizedBox(height: 12),
                  Text('No active bookings yet', style: TextStyle(color: Color(0xFF64748B))),
                ],
              ),
            )
          : ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: _bookings.length,
              itemBuilder: (ctx, i) {
                final b = _bookings[i];
                final statusColor = _getStatusColor(b.status);

                return Container(
                  margin: const EdgeInsets.only(bottom: 14),
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: Colors.grey.shade200),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.02),
                        blurRadius: 8,
                        offset: const Offset(0, 2),
                      ),
                    ],
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Header: ID & Status
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            b.id,
                            style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF64748B)),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                            decoration: BoxDecoration(
                              color: statusColor.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Container(
                                  width: 6,
                                  height: 6,
                                  decoration: BoxDecoration(color: statusColor, shape: BoxShape.circle),
                                ),
                                const SizedBox(width: 6),
                                Text(
                                  b.status,
                                  style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: statusColor),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 10),

                      // Title
                      Text(
                        b.serviceTitle,
                        style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Color(0xFF0F172A)),
                      ),
                      const SizedBox(height: 8),

                      // Provider and Location
                      Row(
                        children: [
                          const Icon(Icons.person_outline, size: 16, color: Color(0xFF1E40AF)),
                          const SizedBox(width: 6),
                          Text(
                            b.providerName,
                            style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Color(0xFF334155)),
                          ),
                          const Spacer(),
                          Text(
                            '${b.priceXaf.toString().replaceAllMapped(RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))'), (m) => '${m[1]},')} XAF',
                            style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Color(0xFF1E40AF)),
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),

                      Row(
                        children: [
                          const Icon(Icons.location_on_outlined, size: 16, color: Color(0xFF64748B)),
                          const SizedBox(width: 6),
                          Text(
                            b.city,
                            style: const TextStyle(fontSize: 12, color: Color(0xFF64748B)),
                          ),
                          const SizedBox(width: 12),
                          const Icon(Icons.access_time, size: 16, color: Color(0xFF64748B)),
                          const SizedBox(width: 6),
                          Text(
                            b.scheduledDate,
                            style: const TextStyle(fontSize: 12, color: Color(0xFF64748B)),
                          ),
                        ],
                      ),
                      const Divider(height: 24),

                      // Action Buttons
                      Row(
                        children: [
                          Expanded(
                            child: OutlinedButton.icon(
                              onPressed: () {
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(content: Text('Calling ${b.providerName}...')),
                                );
                              },
                              icon: const Icon(Icons.phone, size: 16),
                              label: const Text('Call Pro', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                              style: OutlinedButton.styleFrom(
                                foregroundColor: const Color(0xFF1E40AF),
                                side: const BorderSide(color: Color(0xFF1E40AF)),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                              ),
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: ElevatedButton.icon(
                              onPressed: () {
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(content: Text('Opening WhatsApp chat with ${b.providerName}...')),
                                );
                              },
                              icon: const Icon(Icons.chat, size: 16),
                              label: const Text('WhatsApp', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                              style: ElevatedButton.styleFrom(
                                backgroundColor: const Color(0xFF1E40AF),
                                foregroundColor: Colors.white,
                                elevation: 0,
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                );
              },
            ),
    );
  }
}
