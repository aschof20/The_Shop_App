import Moment from 'moment';

class Order {
    constructor(id, items, totalAmount, date) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }

    get readableDate() {
        return Moment(this.date).format('MMMM Do YYYY, hh:mm');
        /* return this.date.toLocaleDateString('en-EN', {
             year: 'numeric',
             month: 'long',
             day: 'numeric',
             hour: '2-digit',
             minute: '2-digit'
         });*/
    }
}

export default Order;