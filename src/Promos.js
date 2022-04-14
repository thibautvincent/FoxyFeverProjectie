export default class Promos {

    static getCurrentPromo = () => {
        const now = new Date();
        // const now = new Date('2022-01-12 01:00:00');

        const promos = [
            {
                'start': '21:30',
                'end': '23:00',
                'title': '10 pinten',
                'price': '€10',
            },
            {
                'start': '23:00',
                'end': '23:59',
                'title': 'Rouge',
                'price': '€2,5',
            },
            {
                'start': '01:00',
                'end': '02:00',
                'title': 'Vodka Redbull',
                'price': '€3',
            },
            {
                'start': '02:00',
                'end': '03:00',
                'title': 'Passoa',
                'price': '€3',
            },
            {
                'start': '03:00',
                'end': '04:00',
                'title': 'Blue Thrill',
                'price': '€2',
            },
        ];

        for (let index in promos) {
            const promo = promos[index];
            let startTime = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${promo.start}`);
            let endTime = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${promo.end}`);
            if (startTime <= now && now <= endTime && now.getMinutes() % 5 === 0) {
                return promo;
            }
        }
        return false;
    }

}
