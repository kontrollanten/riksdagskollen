export default function(){
  this.transition(
    this.fromRoute('members'),
    this.toRoute('member'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
