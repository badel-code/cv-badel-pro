import os

os.makedirs('public', exist_ok=True)

# Minimalistic clean valid PDF generator in pure Python
def make_pdf():
    lines = [
        "BRELL BEMBA",
        "Data Analyst & Media Buyer",
        "Brazzaville & Remote | brell.bemba@gmail.com | +242 06 999 00 00",
        "",
        "PROFIL PROFESSIONNEL",
        "Data Analyst passionne par la creation de logiciel, j'accompagne les SaaS",
        "B2B et B2C ayant deja valide leur produit, a transformer Meta Ads en un canal",
        "d'acquisition rentable avec un CAC mesure.",
        "",
        "EXPERIENCES PROFESSIONNELLES",
        "1. KEDJENOU (2021 - Present) - Fondateur, Agence digitale & solutions data",
        "   - Conception de strategies d'acquisition basees sur l'analyse de performances.",
        "   - Mise en place de supports de reporting et suivi en temps reel du ROI marketing.",
        "   - Collaboration strategique avec les dirigeants pour optimiser la croissance.",
        "",
        "2. The Data Dojo LLC (2018 - 2021) - Consultant Analyste de donnees Power BI",
        "   - Developpement de dashboards interactifs complexes avec Power BI et DAX.",
        "   - Extraction, nettoyage ETL et transformation avancee avec Power Query.",
        "   - Visualisation strategique des KPIs pour orienter la prise de decision.",
        "",
        "3. Airtel Congo (2016 - 2017) - Charge a la relation clientele & Reporting",
        "   - Gestion de portefeuilles clients et traitement des requetes prioritaires.",
        "   - Elaboration des syntheses hebdomadaires et mensuelles de performance client.",
        "",
        "COMPETENCES CLES",
        "- Analyse de donnees & Reporting : Power BI, Excel, DAX, Power Query (96%)",
        "- Acquisition de leads Meta Ads : Scaling, CAC mesure, ROAS, Audiences (93%)",
        "- Vibe Coding & Creation Logicielle : React, Tailwind, Developpement assiste IA (90%)",
        "- Analyse des performances marketing : Tracking, Attribution, CVR (92%)",
        "- Automatisation IA & Workflows : Make, Zapier, Data Pipelines (88%)",
        "",
        "FORMATIONS & CERTIFICATIONS",
        "- 2023-2024 : Specialisation Meta Certified Media Buying & Vibe Coding",
        "- 2018 : Certificat d'Excellence Business Intelligence Power BI - The Data Dojo",
        "- 2014-2016 : Cursus Superieur en Gestion & Systemes d'Information"
    ]

    stream_content = "BT\n/F1 18 Tf\n50 780 Td\n(BRELL BEMBA) Tj\n/F2 12 Tf\n0 -20 Td\n(Data Analyst & Media Buyer) Tj\n/F1 9 Tf\n0 -16 Td\n(Brazzaville & Remote | brell.bemba@gmail.com | +242 06 999 00 00) Tj\n"
    
    y = 720
    stream_content += "ET\n"
    
    # Add horizontal rule
    stream_content += "0.48 0.38 1.0 RG\n2 w\n50 735 m 550 735 l S\n"
    
    stream_content += "BT\n/F1 10 Tf\n"
    curr_y = 715
    for line in lines[3:]:
        curr_y -= 14
        escaped = line.replace('(', '\\(').replace(')', '\\)')
        if any(h in line for h in ["PROFIL PROFESSIONNEL", "EXPERIENCES PROFESSIONNELLES", "COMPETENCES CLES", "FORMATIONS & CERTIFICATIONS"]):
            stream_content += f"/F2 12 Tf\n50 {curr_y} Td\n({escaped}) Tj\n/F1 9.5 Tf\n"
            curr_y -= 4
        elif line.startswith("1. ") or line.startswith("2. ") or line.startswith("3. "):
            stream_content += f"/F2 10 Tf\n50 {curr_y} Td\n({escaped}) Tj\n/F1 9 Tf\n"
        else:
            stream_content += f"50 {curr_y} Td\n({escaped}) Tj\n"
    stream_content += "ET\n"

    stream_bytes = stream_content.encode('latin1')
    stream_len = len(stream_bytes)

    objects = []
    # 1: Catalog
    objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    # 2: Pages
    objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    # 3: Page
    objects.append(b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>")
    # 4: Stream
    objects.append(f"<< /Length {stream_len} >>\nstream\n".encode('latin1') + stream_bytes + b"\nendstream")
    # 5: Font F1
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    # 6: Font F2
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

    pdf = bytearray(b"%PDF-1.4\n")
    xref_offsets = [0]

    for i, obj in enumerate(objects, 1):
        xref_offsets.append(len(pdf))
        pdf.extend(f"{i} 0 obj\n".encode('latin1'))
        pdf.extend(obj)
        pdf.extend(b"\nendobj\n")

    xref_start = len(pdf)
    pdf.extend(f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode('latin1'))
    for off in xref_offsets[1:]:
        pdf.extend(f"{off:010d} 00000 n \n".encode('latin1'))
    pdf.extend(f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_start}\n%%EOF\n".encode('latin1'))

    with open("public/CV_Brell_BEMBA.pdf", "wb") as f:
        f.write(pdf)
    print("PDF created successfully at public/CV_Brell_BEMBA.pdf")

if __name__ == '__main__':
    make_pdf()
