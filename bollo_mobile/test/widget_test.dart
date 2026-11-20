import 'package:flutter_test/flutter_test.dart';
import 'package:mboawork/main.dart';

void main() {
  testWidgets('MboaWork basic app smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const MboaWorkApp());
    expect(find.text('Explore'), findsOneWidget);
  });
}
