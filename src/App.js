export default {
    name: 'app',
    methods: {
        addData() {
            // let author_login = document.getElementById('login').value,
            // author_avatar = document.getElementById('avatar').value;
            
            let comment = document.getElementById('commentForm').value,
                commentObject = {author_login: 'troodon', author_avatar: 'https://picsum.photos/200/300/?random', comment: comment};
 
            this.rows.push(commentObject);
            // console.log(this.rows);
        },
        deleteData(el){
            this.rows.splice(el, 1);
        },
        editData(el){
            this.comment = this.rows[el].comment;
        }
    },
    data () {
        return {
            isHidden: true,
            comment: '',
            rows: [
                {
                    author_login: 'troodon',
                    author_avatar: 'https://picsum.photos/32/32/?1',
                    comment: 'example of cool comment',

                },
                {
                    author_login: 'Mutko',
                    author_avatar: 'https://picsum.photos/32/32/?2',
                    comment: 'Let me speak from my heart in English',

                },
                {
                    author_login: 'alxndrv88',
                    author_avatar: 'https://picsum.photos/32/32/?3',
                    comment: 'Pleasure in the job puts perfection in the work.',

                }

            ]

        }
    }
}

