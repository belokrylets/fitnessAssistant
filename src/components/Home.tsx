import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container fluid="xxl">
            <div>
                <h3>Pet - проект: SPA Фитнес помощник.</h3>
                <dl>
                    <dt>Использовал:</dt>
                    <dd>ReactJS;</dd>
                    <dd>TypeScript;</dd>
                    <dd>Redux;</dd>
                    <dd>React Router Dom.</dd>
                </dl>
                <dl>
                    <dt>Черновой вариант содержит:</dt>
                    <dt>Базовую адаптацию под мобильные телефоны и планшеты</dt>
                    <dd>Страницу со упражнениями на разные группы мышц(список тестовый по 1 - 4 упражнения на каждую группу);</dd>
                    <dd>Справочник упражнений с фильтрацией упражнений по месту проведения тренировки дом/тренажерный зал;</dd>
                    <dd>Калькулятор калорий, производит расчет в зависимости от цели, пола, активности, роста, веса и возраста;</dd>
                    <dd>Таймер табата с настройкой количества раундов;</dd>
                    <dd>Совместимость витаминов, проверяется совместимы ли витамины.</dd>
                </dl>
                <dl>
                    <dt>Дальнейшие планы:</dt>
                    <dd>Работа с версткой и внешним видом приложения</dd>
                    <dd>Создание личного кабинета, с возможностью создавать индивидуальные планы тренировок, следить за прогрессом, загружать фото, планирование тренировок на определенные дни в месяце</dd>
                    <dd>Разработать бекенд часть</dd>
                </dl>
            </div>
        </Container>

    );
}

export default Home;

