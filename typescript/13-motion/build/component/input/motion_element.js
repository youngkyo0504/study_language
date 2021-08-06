var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var InputForm = /** @class */ (function () {
    function InputForm() {
    }
    InputForm.prototype.makeInsertForm = function (media) {
        var _this = this;
        var title = 'Title';
        var subTitle = media === 'IMAGE' || media === 'VIDEO' ? 'Url' : 'Info';
        var subHTML = "\n      <div class=\"formTitle\"><label for=\"\">" + title + "</label> <input type=\"text\" /></div>\n      <div class=\"formSubTitle\">\n      <label for=\"\">" + subTitle + "</label>\n      <input type=\"text\" />\n      </div>\n      <div onclick=\"event.target.parentNode.remove();\">x</div>\n      ";
        //  폼 생성
        var form = document.createElement('form');
        form.innerHTML = subHTML;
        // btn에 이벤트 추가
        var btn = document.createElement('button');
        btn.append('Add');
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            var inputs = form.querySelectorAll('input');
            //section에 전달할 데이터 생성
            var data = {
                title: inputs.item(0).value,
                info: inputs.item(1).value,
            };
            // section 생성
            _this.makeSection(media, data);
            // const documentSection = new DocumentSection(data);
            // documentSection.create(media);
            form.remove(); // form 삭제
        });
        // body에 추가
        form.appendChild(btn);
        document.body.appendChild(form);
        return form;
    };
    InputForm.prototype.create = function (media) {
        this.makeInsertForm(media);
    };
    InputForm.prototype.move = function () { };
    InputForm.prototype.makeSection = function (media, data) {
        console.log(media);
        switch (media) {
            case 'IMAGE':
                console.log('image');
                var image = new Image(data);
                image.create();
                break;
            case 'VIDEO':
                console.log('hi');
                var video = new Video(data);
                video.create();
                break;
            case 'NOTE':
                var note = new Note(data);
                note.create();
                break;
            case 'TODO':
                console.log(media == 'TODO');
                var todo = new ToDo(data);
                todo.create();
                break;
            default:
                throw new Error('not MediaType');
        }
    };
    return InputForm;
}());
export { InputForm };
var DocumentSection = /** @class */ (function () {
    function DocumentSection(data) {
        this.data = data;
    }
    DocumentSection.prototype.create = function (media) {
        // const div = document.createElement('div');
        // const youtube = document.createElement('iframe');
        // youtube.src = 'https://www.youtube.com/watch?v=0UGLL8T1u3U';
        // youtube.src.split('v=')[1];
        // div.innerHTML = `<p>hi</p>`;
        // document.body.appendChild(youtube);
    };
    DocumentSection.prototype.move = function () { };
    return DocumentSection;
}());
export { DocumentSection };
var Description = /** @class */ (function () {
    function Description(data) {
        this.data = data;
    }
    Description.prototype.create = function () {
        var div = document.createElement('div');
        var p = document.createElement('p');
        p.innerHTML = this.data.title;
        div.appendChild(p);
        return div;
    };
    Description.prototype.move = function () { };
    return Description;
}());
var ToDo = /** @class */ (function (_super) {
    __extends(ToDo, _super);
    function ToDo(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        return _this;
    }
    ToDo.prototype.create = function () {
        var div = _super.prototype.create.call(this);
        var check = document.createElement('input');
        var label = document.createElement('label');
        check.type = 'checkbox';
        label.appendChild(check);
        label.append(this.data.info);
        div.appendChild(label);
        document.body.appendChild(div);
        return div;
    };
    return ToDo;
}(Description));
var Note = /** @class */ (function (_super) {
    __extends(Note, _super);
    function Note(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        return _this;
    }
    Note.prototype.create = function () {
        var div = _super.prototype.create.call(this);
        var p = document.createElement('p');
        p.append(this.data.info);
        div.appendChild(p);
        document.body.appendChild(div);
        return div;
    };
    return Note;
}(Description));
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        return _this;
    }
    Video.prototype.create = function () {
        var div = _super.prototype.create.call(this);
        var iframe = document.createElement('iframe');
        var src = this.data.info.split('v=')[1];
        iframe.title = 'YouTube video player';
        iframe.src = "https://www.youtube.com/embed/" + src;
        div.appendChild(iframe);
        document.body.appendChild(div);
        return div;
    };
    return Video;
}(Description));
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        return _this;
    }
    Image.prototype.create = function () {
        var div = _super.prototype.create.call(this);
        var img = document.createElement('img');
        img.src = "https://picsum.photos/200";
        div.appendChild(img);
        document.body.appendChild(div);
        return div;
    };
    return Image;
}(Description));
