<template>
  <div class="col-12">
    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section style="padding-bottom: 0;">
        <div class="row items-center no-wrap">
          <div class="col comment__user-info">
            <img :src="comment.userPicture" :alt="comment.userName">
            <div>
              <div class="text-weight-bold">{{ comment.userName }}</div>
              <div class="text-caption">{{ comment.createdAt }}</div>
            </div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Delete Comment</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Report Comment</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        {{ comment.body }}
      </q-card-section>

      <q-card-section 
        class="text-right text-grey-7"
        style="padding-top: 0;"
      >
        <span class="text-subtitle2 q-mr-sm">{{ comment.likes }} likes</span>
        <span class="text-subtitle2">{{ comment.replies }} replies</span>
      </q-card-section>

      <q-separator />

      <q-card-actions class="justify-around">
        <q-item clickable class="col-4">
          <q-item-section avatar>
            <q-icon color="primary" name="far fa-thumbs-up" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Like</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable class="col-4">
          <q-item-section avatar>
            <q-icon color="primary" name="far fa-comment-alt" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Reply</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'SingleComponent',
  props: ['comment'],
}
</script>

<style lang="scss">
  .comment__user-info {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    img {
      height: 42px;
      width: 42px;
      border-radius: 69%;
      margin-right: 8px;
    }
  }
</style>