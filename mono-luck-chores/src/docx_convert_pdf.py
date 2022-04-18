from docx2pdf import convert


def docx_convert_pdf(lockid):
    input_filename = "../doc/"+lockid+".docx"
    output_filename = "../doc/"+lockid+".pdf"
    file = open(output_filename, "w")
    file.close()
    convert(input_filename, output_filename)
