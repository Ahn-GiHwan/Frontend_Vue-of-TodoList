<template>
  <div>
    <b-form-input v-model="content" ref="content"></b-form-input>
    <b-button
      block
      variant="outline-success"
      v-on:click="okEdit"
      style="margin-top: 10px"
    >
      수정
    </b-button>
    <b-button
      block
      variant="danger"
      style="margin-top: 10px"
      v-on:click="cancelConfirm"
    >
      취소/돌아가기
    </b-button>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data: function () {
    return {
      id: "",
      content: "",
      url: "http://localhost:3000/guestbook",
    };
  },
  created: function () {
    this.init();
    if (this.$route.params.id == undefined) {
      this.$router.push("/");
    }
  },
  methods: {
    init: function () {
      this.axios
        .get(this.url + "/view/" + this.$route.params.id)
        .then((res) => {
          this.id = res.data.id;
          this.content = res.data.contents;
          this.$refs.content.$el.focus();
        });
    },
    cancelConfirm: function () {
      let result = confirm("정말 리스트로 돌아가겠습니까?");
      if (result) {
        this.$router.push("/");
      }
    },
    okEdit: function () {
      this.axios
        .post(this.url + "/update", { id: this.id, contents: this.content })
        .then((res) => {
          console.log(res);
          this.$router.push("/");
        });
    },
  },
};
</script>

<style>
</style>