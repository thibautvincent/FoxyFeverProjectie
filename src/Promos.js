export default class Promos {


    static getCurrentPromo = () => {
        const now = new Date();
        // const now = new Date('2022-01-12 03:30:00');

        const promos = [
            {
                'start': '21:30',
                'end': '23:00',
                'title': '6 pinten',
                'price': '€8',
                'age': '-18',
            },
            {
                'start': '23:00',
                'end': '00:00',
                'title': 'Jenever shotje',
                'price': '€1',
                'age': '+18',
            },
            {
                'start': '00:00',
                'end': '01:00',
                'title': 'Rouge/Duvel',
                'price': '€2.5',
                'age': '-18',
            },
            {
                'start': '01:00',
                'end': '02:00',
                'title': 'Vodka Redbull',
                'price': '€3,5',
                'age': '+18',
            },
            {
                'start': '03:00',
                'end': '04:00',
                'title': 'Blue Thrill',
                'price': '€2',
                'age': '+18',
            },
        ];

        for (let index in promos) {
            const promo = promos[index];
            let startTime = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${promo.start}`);
            let endTime = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${promo.end}`);
            if (endTime < startTime) {
                endTime.setDate(endTime.getDate() + 1);
            }
            if (startTime <= now && now < endTime && now.getMinutes() % 5 === 0) {
                return promo;
            }
        }
        return false;
    }

}
