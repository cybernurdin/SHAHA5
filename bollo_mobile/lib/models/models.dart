class Provider {
  final String id;
  final String name;
  final String badge;
  final double rating;
  final int reviewsCount;
  final String avatarUrl;
  final int completedTasks;
  final String responseTime;

  const Provider({
    required this.id,
    required this.name,
    required this.badge,
    required this.rating,
    required this.reviewsCount,
    required this.avatarUrl,
    required this.completedTasks,
    required this.responseTime,
  });
}

class ServiceListing {
  final String id;
  final String title;
  final String categoryId;
  final Provider provider;
  final String city;
  final String neighborhood;
  final int priceXaf;
  final String priceUnit;
  final String imageUrl;
  final double rating;
  final int reviews;
  final bool featured;
  final String description;

  const ServiceListing({
    required this.id,
    required this.title,
    required this.categoryId,
    required this.provider,
    required this.city,
    required this.neighborhood,
    required this.priceXaf,
    required this.priceUnit,
    required this.imageUrl,
    required this.rating,
    required this.reviews,
    required this.featured,
    required this.description,
  });
}

class ServiceCategory {
  final String id;
  final String name;
  final String iconCode;
  final String description;
  final int count;

  const ServiceCategory({
    required this.id,
    required this.name,
    required this.iconCode,
    required this.description,
    required this.count,
  });
}

class TaskBooking {
  final String id;
  final String serviceTitle;
  final String providerName;
  final String city;
  final String scheduledDate;
  final int priceXaf;
  final String status; // 'Confirmed', 'In Progress', 'Completed'

  const TaskBooking({
    required this.id,
    required this.serviceTitle,
    required this.providerName,
    required this.city,
    required this.scheduledDate,
    required this.priceXaf,
    required this.status,
  });
}
