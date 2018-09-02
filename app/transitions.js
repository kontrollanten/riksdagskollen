export default function(){
  this.transition(
    this.fromRoute('members'),
    this.toRoute('member'),
    this.use('exit-left', { duration: 350 }),
    this.reverse('exit-right', { duration: 350 })
  );
}
