<template>
  <div>
    <div>
      <h3>Write Your Todo</h3>
      <div style="margin-bottom: 10px">
        <b-form-input
          v-model="contents"
          placeholder="Enter your todo"
          ref="contents"
        ></b-form-input>
        <b-button
          block
          variant="outline-primary"
          v-on:click="addTodo"
          style="margin-top: 10px"
        >
          확인
        </b-button>
      </div>
      <table class="table">
        <tr>
          <th>번호</th>
          <th>내용</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
        <tr v-for="data in data" :key="data.id">
          <td>{{ data.id + 1 }}</td>
          <td>{{ data.contents }}</td>
          <td>
            <router-link :to="{ name: 'Edit', params: { id: data.id } }">
              <b-button variant="primary"> 수정 </b-button>
            </router-link>
          </td>
          <td>
            <b-button v-on:click="remove(data.id)" variant="danger">
              삭제
            </b-button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: function () {
    return {
      data: null,
      contents: "",
      url: "http://localhost:3000/guestbook",
    };
  },
  created: function () {
    this.initData();
  },
  methods: {
    initData: function () {
      this.axios
        .get(this.url)
        .then((res) => {
          this.data = res.data.data;
          this.$refs.contents.$el.focus();
        })
        .catch((err) => {
          console.log(err);
          alert("서버와의 통신이 좋지 않습니다.");
        });
    },
    addTodo: function () {
      if (this.contents == "") {
        alert("내용을 입력해주세요.");
        this.$refs.contents.$el.focus();
      } else {
        console.log("ddsdsd" + this.contents);
        this.axios
          .post(this.url + "/insert", {
            contents: this.contents,
          })
          .then((res) => {
            console.log(res);
            this.initData();
            this.contents = null;
          });
      }
    },
    remove: function (id) {
      let result = confirm("정말 삭제하시겠습니까?");
      if (result) {
        this.axios.post(this.url + "/delete", { id: id }).then((res) => {
          console.log(res);
          this.initData();
          alert("삭제가 완료되었습니다.");
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  background-color: teal;
  color: #f1f1f1;
  padding: 10px;
  border-radius: 6px;
}
</style>
