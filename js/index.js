function viewProduct(id) {
  if (localStorage.getItem('productId')) {
    localStorage.removeItem('productId');
  }
  localStorage.setItem('productId', id);
  window.location.replace('./chitietsanpham.html');
}