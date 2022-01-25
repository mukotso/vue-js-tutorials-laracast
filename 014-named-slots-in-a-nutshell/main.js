// https://getbootstrap.com/docs/4.1/components/alerts/
Vue.component('modal', {
	template: `
	<!-- Modal -->
	<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <slot name="title"></slot>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
     <slot name="content"></slot>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
	`
});

// https://www.quora.com/How-does-Bootstrap-modal-work
new Vue({
	el: '#root',
})
