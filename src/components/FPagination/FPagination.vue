<template>
  <section class="f-pagination">
    Pagination
  </section>
</template>

<script>
export default {
  name: "f-pagination"
};

/**

{
   "total": 50,
   "per_page": 15,
   "current_page": 1,
   "last_page": 4,
   "first_page_url": "http://laravel.app?page=1",
   "last_page_url": "http://laravel.app?page=4",
   "next_page_url": "http://laravel.app?page=2",
   "prev_page_url": null,
   "path": "http://laravel.app",
   "from": 1,
   "to": 15,
   "data":[
        {
            // Result Object
        },
        {
            // Result Object
        }
   ]
}

*/
</script>

<style lang="scss" scoped>
.f-pagination {
}
</style>
