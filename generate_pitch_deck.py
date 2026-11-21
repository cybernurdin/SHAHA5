import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def create_deck():
    prs = Presentation()
    # 16:9 widescreen dimensions
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    blank_layout = prs.slide_layouts[6]

    # Color Palette: DevFest & MboaWork Theme
    DARK_NAVY = RGBColor(15, 23, 42)      # #0F172A
    EMERALD = RGBColor(5, 150, 105)       # #059669
    AMBER = RGBColor(245, 158, 11)        # #F59E0B
    WARM_CREAM = RGBColor(250, 249, 245)  # #FAF9F5
    CARD_BG = RGBColor(255, 255, 255)     # #FFFFFF
    TEXT_MUTED = RGBColor(100, 116, 139)  # #64748B
    BORDER_COLOR = RGBColor(226, 232, 240)# #E2E8F0

    def add_header(slide, tag_text, title_text, subtitle_text):
        # Tag pill
        tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.5), Inches(8), Inches(0.4))
        tf = tag_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = f"★ {tag_text.upper()}"
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = AMBER
        
        # Title
        title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.9), Inches(11.5), Inches(0.8))
        tf2 = title_box.text_frame
        tf2.word_wrap = True
        p2 = tf2.paragraphs[0]
        p2.text = title_text
        p2.font.size = Pt(28)
        p2.font.bold = True
        p2.font.color.rgb = DARK_NAVY

        # Subtitle
        if subtitle_text:
            sub_box = slide.shapes.add_textbox(Inches(0.8), Inches(1.75), Inches(11.5), Inches(0.5))
            tf3 = sub_box.text_frame
            tf3.word_wrap = True
            p3 = tf3.paragraphs[0]
            p3.text = subtitle_text
            p3.font.size = Pt(14)
            p3.font.color.rgb = TEXT_MUTED

    def draw_card(slide, left, top, width, height, bg_color=CARD_BG, border_color=BORDER_COLOR):
        shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
        shape.fill.solid()
        shape.fill.fore_color.rgb = bg_color
        if border_color:
            shape.line.color.rgb = border_color
            shape.line.width = Pt(1.5)
        else:
            shape.line.fill.background()
        return shape

    # ==========================================================
    # SLIDE 1: COVER / TITLE SLIDE
    # ==========================================================
    slide1 = prs.slides.add_slide(blank_layout)
    bg1 = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = DARK_NAVY
    bg1.line.fill.background()

    # Brand badge
    pill1 = draw_card(slide1, Inches(0.9), Inches(1.2), Inches(4.5), Inches(0.5), bg_color=AMBER, border_color=None)
    tf = pill1.text_frame
    p = tf.paragraphs[0]
    p.text = "★ CAMEROON SHARING ECONOMY & ARTISAN HUB"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = DARK_NAVY
    p.alignment = PP_ALIGN.CENTER

    # Main Headline
    t_box = slide1.shapes.add_textbox(Inches(0.9), Inches(2.0), Inches(11.5), Inches(2.5))
    tf = t_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "MboaWork"
    p.font.size = Pt(64)
    p.font.bold = True
    p.font.color.rgb = RGBColor(255, 255, 255)

    p2 = tf.add_paragraph()
    p2.text = "Monetizing Idle Household Assets & On-Demand Skilled Services in Bambili & Across Cameroon"
    p2.font.size = Pt(22)
    p2.font.color.rgb = RGBColor(203, 213, 225)
    p2.space_before = Pt(16)

    # Subtext / Value prop
    desc_box = slide1.shapes.add_textbox(Inches(0.9), Inches(4.7), Inches(11.5), Inches(1.2))
    tf = desc_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Rent out your idle washing machines, irons, and power generators. Book trusted electricians, plumbers, and craftspeople on demand with instant Mobile Money."
    p.font.size = Pt(15)
    p.font.color.rgb = RGBColor(148, 163, 184)

    # Footer metrics bar on cover
    footer_bar = draw_card(slide1, Inches(0.9), Inches(6.0), Inches(11.5), Inches(0.8), bg_color=RGBColor(30, 41, 59), border_color=None)
    tf = footer_bar.text_frame
    p = tf.paragraphs[0]
    p.text = "PITCH DECK &bull; SEED STAGE &bull; FOCUS: BAMBILI UNIVERSITY HUB &amp; BAMENDA REGION &bull; LIVE ON VERCEL &amp; ANDROID APK"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = RGBColor(226, 232, 240)
    p.alignment = PP_ALIGN.CENTER

    # ==========================================================
    # SLIDE 2: THE PROBLEM (Bambili & Cameroon Reality)
    # ==========================================================
    slide2 = prs.slides.add_slide(blank_layout)
    add_header(slide2, "The Real Pain Points", "High Unemployment & Idle Household Assets", "Why communities like Bambili and Bamenda are trapped in an inefficient informal economy.")

    problems = [
        ("01. Youth & Graduate Underemployment", "Over 65% of youths and university graduates in Bambili struggle to find formal wage jobs, despite possessing certified skills in electrical work, repairs, catering, and fashion design.", "fa-user-graduate"),
        ("02. Trapped Idle Home Capital", "Thousands of families own expensive appliances (washing machines, steam irons, power generators, drill sets, ladders) that sit idle 90% of the week generating zero income.", "fa-couch"),
        ("03. Student Purchasing Power Deficit", "Over 25,000 students at the University of Bamenda cannot afford 250,000 XAF washing machines, spending hours washing heavy bedding by hand in cold water.", "fa-hand-holding-dollar"),
        ("04. Fragmented & Untrusted Artisan Market", "Finding a reliable plumber or electrician during emergencies is pure word-of-mouth guesswork, often leading to inflated quotes, delayed work, and zero accountability.", "fa-triangle-exclamation")
    ]

    card_w = Inches(5.6)
    card_h = Inches(2.1)
    for idx, (title, text, _) in enumerate(problems):
        row = idx // 2
        col = idx % 2
        left = Inches(0.8 + col * 6.0)
        top = Inches(2.5 + row * 2.3)
        draw_card(slide2, left, top, card_w, card_h, bg_color=CARD_BG)
        
        box = slide2.shapes.add_textbox(left + Inches(0.3), top + Inches(0.2), card_w - Inches(0.6), card_h - Inches(0.4))
        tf = box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = title
        p.font.size = Pt(15)
        p.font.bold = True
        p.font.color.rgb = DARK_NAVY
        
        p2 = tf.add_paragraph()
        p2.text = text
        p2.font.size = Pt(12)
        p2.font.color.rgb = TEXT_MUTED
        p2.space_before = Pt(8)

    # ==========================================================
    # SLIDE 3: THE SOLUTION — MBOAWORK SHARING PLATFORM
    # ==========================================================
    slide3 = prs.slides.add_slide(blank_layout)
    add_header(slide3, "Our Solution", "A Hyper-Local Sharing Economy Platform", "Turning idle household equipment into rental income and connecting certified local labor.")

    solutions = [
        ("Asset & Appliance Rentals", "Owners list their washing machine, heavy pressing iron, ladder, or generator. Neighbors & students rent per cycle, hour, or day. Passive cash flow for families.", EMERALD),
        ("On-Demand Service Booking", "Verified electricians, plumbers, AC technicians, hairdressers, and carpenters available on demand with transparent standard rates in XAF.", DARK_NAVY),
        ("Reverse Task & Custom Bidding", "Clients post what they need with their budget. Local artisans compete with verified quotes, portfolio pictures, and delivery timelines.", AMBER)
    ]

    for idx, (title, text, color) in enumerate(solutions):
        left = Inches(0.8 + idx * 3.9)
        top = Inches(2.5)
        w = Inches(3.7)
        h = Inches(4.2)
        draw_card(slide3, left, top, w, h, bg_color=CARD_BG)
        
        # Color bar
        bar = slide3.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, w, Inches(0.15))
        bar.fill.solid()
        bar.fill.fore_color.rgb = color
        bar.line.fill.background()

        box = slide3.shapes.add_textbox(left + Inches(0.3), top + Inches(0.4), w - Inches(0.6), h - Inches(0.8))
        tf = box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = f"Pillar 0{idx+1}"
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = color

        p2 = tf.add_paragraph()
        p2.text = title
        p2.font.size = Pt(18)
        p2.font.bold = True
        p2.font.color.rgb = DARK_NAVY
        p2.space_before = Pt(8)

        p3 = tf.add_paragraph()
        p3.text = text
        p3.font.size = Pt(13)
        p3.font.color.rgb = TEXT_MUTED
        p3.space_before = Pt(12)

    # ==========================================================
    # SLIDE 4: THE ASSET RENTAL REVOLUTION (Washing Machines & Tools)
    # ==========================================================
    slide4 = prs.slides.add_slide(blank_layout)
    add_header(slide4, "Core Innovation", "Renting Everyday Household Assets", "Why buying everything makes no financial sense for university students and low-income households.")

    rent_examples = [
        ("Washing Machine Rentals", "2,000 XAF / Cycle", "Instead of buying a 250,000 XAF appliance, students in Bambili hostels book an hour on a neighbor's machine for bedsheets and bulky clothes.", "Generates 40,000 XAF/mo for host family"),
        ("Heavy Steam Pressing Iron", "1,000 XAF / Day", "Essential for students preparing for defense, job interviews, or church celebrations. Available within 5 minutes walk.", "Owner covers utility bills effortlessly"),
        ("Generator & Inverter Backup", "8,000 XAF / Day", "During regional load shedding, small shops and student groups rent generators to power project deadlines and exams.", "High demand in North West & Littoral"),
        ("Power Drills, Ladders & Tools", "3,000 XAF / Day", "Homeowners and casual DIY workers rent tools for one-off shelf hanging or roof patching without buying expensive hardware.", "Maximizes tool lifecycle & efficiency")
    ]

    card_w = Inches(5.6)
    card_h = Inches(2.1)
    for idx, (name, price, desc, impact) in enumerate(rent_examples):
        row = idx // 2
        col = idx % 2
        left = Inches(0.8 + col * 6.0)
        top = Inches(2.5 + row * 2.3)
        draw_card(slide4, left, top, card_w, card_h, bg_color=CARD_BG)
        
        box = slide4.shapes.add_textbox(left + Inches(0.3), top + Inches(0.2), card_w - Inches(0.6), card_h - Inches(0.4))
        tf = box.text_frame
        tf.word_wrap = True
        
        p = tf.paragraphs[0]
        p.text = name
        p.font.size = Pt(15)
        p.font.bold = True
        p.font.color.rgb = DARK_NAVY

        p_price = tf.add_paragraph()
        p_price.text = f"Typical Rental: {price}"
        p_price.font.size = Pt(12)
        p_price.font.bold = True
        p_price.font.color.rgb = EMERALD

        p_desc = tf.add_paragraph()
        p_desc.text = desc
        p_desc.font.size = Pt(11)
        p_desc.font.color.rgb = TEXT_MUTED

        p_imp = tf.add_paragraph()
        p_imp.text = f"★ Impact: {impact}"
        p_imp.font.size = Pt(10)
        p_imp.font.bold = True
        p_imp.font.color.rgb = AMBER
        p_imp.space_before = Pt(4)

    # ==========================================================
    # SLIDE 5: BAMBILI & BAMENDA AS PRIME LAUNCHPAD
    # ==========================================================
    slide5 = prs.slides.add_slide(blank_layout)
    add_header(slide5, "Target Community", "Why Bambili & Bamenda Are The Ideal Beachhead", "The high density of university hostels and artisan clusters creates perfect network effects.")

    points_bambili = [
        ("25,000+ University Students", "The University of Bamenda (UBa) in Bambili represents a hyper-concentrated population of tech-savvy youths in desperate need of affordable washing, ironing, and repairs."),
        ("Hostel Mini-Cité Clustered Living", "Students live in dense hostel clusters (Three Corners, Mile 10, Cité Verte) within 200m of local residential homeowners who own appliances."),
        ("Booming Commercial Avenue & Cow Street", "Bamenda's Commercial Ave and Sonac Street host over 4,000 independent technicians, tailors, and mechanics seeking reliable digital customer acquisition."),
        ("Strong Word-of-Mouth & Trust Networks", "Grassfields communities rely heavily on reputation and community endorsement, matching MboaWork's CNI verification and rating system.")
    ]

    card_w = Inches(5.6)
    card_h = Inches(2.1)
    for idx, (title, desc) in enumerate(points_bambili):
        row = idx // 2
        col = idx % 2
        left = Inches(0.8 + col * 6.0)
        top = Inches(2.5 + row * 2.3)
        draw_card(slide5, left, top, card_w, card_h, bg_color=CARD_BG)
        
        box = slide5.shapes.add_textbox(left + Inches(0.3), top + Inches(0.2), card_w - Inches(0.6), card_h - Inches(0.4))
        tf = box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = title
        p.font.size = Pt(15)
        p.font.bold = True
        p.font.color.rgb = DARK_NAVY

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(12)
        p2.font.color.rgb = TEXT_MUTED
        p2.space_before = Pt(6)

    # ==========================================================
    # SLIDE 6: MARKET SIZE & OPPORTUNITY
    # ==========================================================
    slide6 = prs.slides.add_slide(blank_layout)
    add_header(slide6, "Market Potential", "Market Opportunity in Cameroon & Central Africa", "Capturing the vast informal services and domestic sharing economy.")

    metrics = [
        ("$24 Billion", "TAM: Cameroon Informal Economy", "Informal services represent ~55% of Cameroon's total GDP with over 8.5 million active informal workers."),
        ("3.2 Million", "SAM: Urban Households & Students", "Target households in Douala, Yaoundé, Bamenda, Buea, and Bafoussam with smartphone & Mobile Money access."),
        ("60,000 Users", "SOM: 18-Month Target", "Targeting 60K active transactions across Bambili university hostels and Bamenda commercial corridors.")
    ]

    for idx, (num, title, text) in enumerate(metrics):
        left = Inches(0.8 + idx * 3.9)
        top = Inches(2.5)
        w = Inches(3.7)
        h = Inches(4.2)
        draw_card(slide6, left, top, w, h, bg_color=CARD_BG)

        box = slide6.shapes.add_textbox(left + Inches(0.3), top + Inches(0.4), w - Inches(0.6), h - Inches(0.8))
        tf = box.text_frame
        tf.word_wrap = True

        p = tf.paragraphs[0]
        p.text = num
        p.font.size = Pt(36)
        p.font.bold = True
        p.font.color.rgb = EMERALD

        p2 = tf.add_paragraph()
        p2.text = title
        p2.font.size = Pt(16)
        p2.font.bold = True
        p2.font.color.rgb = DARK_NAVY
        p2.space_before = Pt(8)

        p3 = tf.add_paragraph()
        p3.text = text
        p3.font.size = Pt(13)
        p3.font.color.rgb = TEXT_MUTED
        p3.space_before = Pt(12)

    # ==========================================================
    # SLIDE 7: BUSINESS MODEL & REVENUE STREAMS
    # ==========================================================
    slide7 = prs.slides.add_slide(blank_layout)
    add_header(slide7, "Monetization", "Sustainable & Scalable Revenue Model", "Multiple high-margin income streams aligned with user success.")

    rev_streams = [
        ("1. Transaction Commission (10% - 12%)", "Earned on completed appliance rentals (e.g. 200 XAF per washing machine cycle) and completed service bookings deducted automatically."),
        ("2. Featured Listings & Promoted Ads", "Artisans and appliance owners pay 2,500 XAF/month to appear on top of city quarter searches (Commercial Ave, Bastos, Molyko)."),
        ("3. CNI Verification & Badge (500 XAF)", "One-time credential and national ID verification charge providing the trusted 'CNI Verified' shield."),
        ("4. Asset Protection Guarantee Fund", "Optional 3% micro-insurance protection fee on high-value equipment rentals (generators, cameras, power tools) guaranteeing repair cover.")
    ]

    card_w = Inches(5.6)
    card_h = Inches(2.1)
    for idx, (title, desc) in enumerate(rev_streams):
        row = idx // 2
        col = idx % 2
        left = Inches(0.8 + col * 6.0)
        top = Inches(2.5 + row * 2.3)
        draw_card(slide7, left, top, card_w, card_h, bg_color=CARD_BG)
        
        box = slide7.shapes.add_textbox(left + Inches(0.3), top + Inches(0.2), card_w - Inches(0.6), card_h - Inches(0.4))
        tf = box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = title
        p.font.size = Pt(15)
        p.font.bold = True
        p.font.color.rgb = DARK_NAVY

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(12)
        p2.font.color.rgb = TEXT_MUTED
        p2.space_before = Pt(6)

    # ==========================================================
    # SLIDE 8: GO-TO-MARKET & COMMUNITY ROLLOUT
    # ==========================================================
    slide8 = prs.slides.add_slide(blank_layout)
    add_header(slide8, "Go-To-Market", "Phased Hyper-Local Rollout Strategy", "Grassroots activation starting in university hubs and scaling to major regional cities.")

    stages = [
        ("Phase 1: Bambili Campus Blitz (Months 1-3)", "Deploy 15 student ambassadors across Bambili hostels. Onboard 100 homeowner washing machines & irons. Offer first-wash discount incentives.", EMERALD),
        ("Phase 2: Bamenda Commercial Corridor (Months 4-6)", "Partner with Commercial Avenue electrician guilds, Sonac Street mechanics, and Cow Street artisans. Introduce reverse task bidding.", DARK_NAVY),
        ("Phase 3: National Scale — Buea & Douala (Months 7-12)", "Expand to Buea (Silicon Mountain student clusters) and Douala commercial quarters (Bonapriso, Akwa, Makepe). Deploy Flutter mobile app.", AMBER)
    ]

    for idx, (title, text, color) in enumerate(stages):
        left = Inches(0.8 + idx * 3.9)
        top = Inches(2.5)
        w = Inches(3.7)
        h = Inches(4.2)
        draw_card(slide8, left, top, w, h, bg_color=CARD_BG)

        bar = slide8.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, w, Inches(0.15))
        bar.fill.solid()
        bar.fill.fore_color.rgb = color
        bar.line.fill.background()

        box = slide8.shapes.add_textbox(left + Inches(0.3), top + Inches(0.4), w - Inches(0.6), h - Inches(0.8))
        tf = box.text_frame
        tf.word_wrap = True

        p = tf.paragraphs[0]
        p.text = f"Step 0{idx+1}"
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = color

        p2 = tf.add_paragraph()
        p2.text = title
        p2.font.size = Pt(17)
        p2.font.bold = True
        p2.font.color.rgb = DARK_NAVY
        p2.space_before = Pt(8)

        p3 = tf.add_paragraph()
        p3.text = text
        p3.font.size = Pt(13)
        p3.font.color.rgb = TEXT_MUTED
        p3.space_before = Pt(12)

    # ==========================================================
    # SLIDE 9: TECHNOLOGY & WORKING PRODUCT (Live Today)
    # ==========================================================
    slide9 = prs.slides.add_slide(blank_layout)
    add_header(slide9, "Product Status", "Fully Functional Technology Already Built", "We are not presenting wireframes; our production platform is live on Vercel and Android.")

    tech_cards = [
        ("Live Web Application (Vercel)", "Accessible at mboawork-web.vercel.app with instant response, DevFest Bamenda design hierarchy, quarter search filters, and vector icons.", "HTTP 200 OK &bull; Production"),
        ("Native Android APK Build", "Compiled release APK (48.3 MB) supporting Android 5.0 to 14+. Includes offline browsing, push alerts, and direct WhatsApp contact.", "MboaWork-release.apk ready"),
        ("In-App Instant OTP Authentication", "Custom security flow delivering 4-digit temporary codes directly inside the app, saving 100% of expensive SMS gateway API fees.", "Zero Cost Verification"),
        ("Voice Note Audio Transcription", "Microphone helper built for non-tech-savvy mothers, older craftspeople, and Pidgin speakers to describe tasks by speaking.", "Accessible to Everyone")
    ]

    card_w = Inches(5.6)
    card_h = Inches(2.1)
    for idx, (title, desc, badge) in enumerate(tech_cards):
        row = idx // 2
        col = idx % 2
        left = Inches(0.8 + col * 6.0)
        top = Inches(2.5 + row * 2.3)
        draw_card(slide9, left, top, card_w, card_h, bg_color=CARD_BG)
        
        box = slide9.shapes.add_textbox(left + Inches(0.3), top + Inches(0.2), card_w - Inches(0.6), card_h - Inches(0.4))
        tf = box.text_frame
        tf.word_wrap = True
        
        p_badge = tf.paragraphs[0]
        p_badge.text = f"★ {badge.upper()}"
        p_badge.font.size = Pt(10)
        p_badge.font.bold = True
        p_badge.font.color.rgb = EMERALD

        p = tf.add_paragraph()
        p.text = title
        p.font.size = Pt(15)
        p.font.bold = True
        p.font.color.rgb = DARK_NAVY
        p.space_before = Pt(2)

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(11)
        p2.font.color.rgb = TEXT_MUTED
        p2.space_before = Pt(4)

    # ==========================================================
    # SLIDE 10: LEADERSHIP TEAM & ADVISORY (With Placeholders)
    # ==========================================================
    slide10 = prs.slides.add_slide(blank_layout)
    add_header(slide10, "Execution Team", "Leadership Team & Community Champions", "Passionate builders with deep roots in Bamenda and Cameroon's technology ecosystem.")

    team_members = [
        ("[Founder & Chief Executive Officer]", "Lead Visionary & Product Architect", "Oversees product strategy, strategic partnerships with artisan associations, and community rollout across Bambili & Bamenda.", "Your Name / Photo Placeholder"),
        ("[Head of Engineering & Mobile Lead]", "Full-Stack & Flutter Systems Lead", "Architects the web platform, Android APK, Mobile Money payment gateways, and backend dispatch services.", "Team Member Name / Photo"),
        ("[Head of Operations & Bambili Lead]", "Community & Campus Growth", "Coordinates student hostel ambassadors in Bambili, homeowner onboarding, and quality verification audits.", "Team Member Name / Photo"),
        ("[Head of Finance & Artisan Relations]", "Partnerships & Merchant Trust", "Manages artisan guild relationships, MoMo reconciliation, escrow mechanisms, and regional expansion.", "Team Member Name / Photo")
    ]

    card_w = Inches(2.7)
    card_h = Inches(4.3)
    for idx, (role, title, desc, ph) in enumerate(team_members):
        left = Inches(0.8 + idx * 2.95)
        top = Inches(2.4)
        draw_card(slide10, left, top, card_w, card_h, bg_color=CARD_BG)

        # Photo placeholder box
        ph_box = slide10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left + Inches(0.4), top + Inches(0.3), Inches(1.9), Inches(1.8))
        ph_box.fill.solid()
        ph_box.fill.fore_color.rgb = RGBColor(241, 245, 249)
        ph_box.line.color.rgb = BORDER_COLOR
        tf = ph_box.text_frame
        p = tf.paragraphs[0]
        p.text = "[ Photo ]"
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = TEXT_MUTED
        p.alignment = PP_ALIGN.CENTER

        # Member Details
        box = slide10.shapes.add_textbox(left + Inches(0.15), top + Inches(2.2), card_w - Inches(0.3), Inches(2.0))
        tf2 = box.text_frame
        tf2.word_wrap = True
        
        p_name = tf2.paragraphs[0]
        p_name.text = role
        p_name.font.size = Pt(13)
        p_name.font.bold = True
        p_name.font.color.rgb = DARK_NAVY
        p_name.alignment = PP_ALIGN.CENTER

        p_title = tf2.add_paragraph()
        p_title.text = title
        p_title.font.size = Pt(10)
        p_title.font.bold = True
        p_title.font.color.rgb = EMERALD
        p_title.alignment = PP_ALIGN.CENTER
        p_title.space_before = Pt(2)

        p_desc = tf2.add_paragraph()
        p_desc.text = desc
        p_desc.font.size = Pt(10)
        p_desc.font.color.rgb = TEXT_MUTED
        p_desc.alignment = PP_ALIGN.CENTER
        p_desc.space_before = Pt(6)

    # Save presentation
    output_path = "MboaWork_Pitch_Deck_Bambili_Cameroon.pptx"
    prs.save(output_path)
    print(f"Pitch Deck created successfully at: {os.path.abspath(output_path)}")

if __name__ == "__main__":
    create_deck()
