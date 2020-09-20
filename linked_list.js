insertAt(data,index){
	if(!this.head){
		return;
	}
	if (index === 0){
		return this.head=new Node(this.head);
	}
	if(!previous || !previous.next){
		return;
	}
	const previous = this.getAt(index-1) || this.getLast();
	const node = new Node(data,previous.next);
	previous.next = node;
}