<script>

/*

Very simple example of object oriented programming in JavaScript

*/

class Picture {
  constructor(id, title, img) {
    this.id = id;
    this.title = title;
    this.img = img;
  }

  display_values() {
    console.log("id:%s, title:%s, img:%s", this.id, this.title, this.img);
  }
}

const example = new Picture("1", "title", "file.png");
example.display_values();

</script>
