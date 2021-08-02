function truncate(txt, txt_length, txt_suffix = null) {
  let final = new Array();
  const num = (txt_suffix == null)
    ? txt_length 
    : (txt_length-txt_suffix.length);

  for (let i = 0; i < num; i++) {
    final.push(txt[i]);
  }
  if (txt_suffix != null) {
    for (let i = 0; i < txt_suffix.length; i++) {
      final.push(txt_suffix[i]);
    }
  }
  return final.join("")
}

