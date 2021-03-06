import { ListGroup } from "react-bootstrap";

const program = [
    {
        russinName: 'Понедельник', workouts: [
            {
                id: 1, value: 'chest', rus: "Грудные мышцы", exercises: [
                    { id: 101, place: 'gym', name: 'Жим штанги лежа', description: 'Исходное положение: лежа на скамье, поясница и ягодицы прижаты к поверхности скамьи, ноги - поставить на пол всей ступней. При опускании штанги на грудь - вдох; предплечье, при касании штанги с грудью, - перпендикулярно полу; при поднятии штанги - выдох.', img: '' },
                    { id: 102, place: 'home', name: 'Отжимания', description: 'Исходное положение: лежа, упор на руки, руки чуть шире плеч, ноги вместе, корпус и ноги должны быть в одной плоскости. При вдохе опускаемся к полу, при выдохе равномерно поднимаемся вверх до выпрямления рук.', img: '' },
                    { id: 103, place: 'home', name: 'Брусья', description: 'Исходное положение: руки на брусьях, локти направлены в стороны, голова опущена к груди, ноги согнуты и подняты к груди. На вдохе опускаемся, на выдохе поднимаемся, не следует полностью выпрямлять руки.', img: '' },
                    { id: 104, place: 'home', name: 'Отжимания с касанием плеч', description: 'Исходное положение: встаньте в упор лёжа, руки чуть шире плеч, ноги вместе, корпус и ноги должны быть в одной плоскости. При вдохе опускаемся к полу, при выдохе равномерно поднимаемся вверх и касаемся левой ладонью правого плеча. Снова опуститесь в отжимание и на следующем подъеме поменяйте руку.', img: '' },

                ]
            },
            {
                id: 3, value: 'back', rus: "Мышцы спины", exercises: [
                    { id: 301, place: 'gym', name: 'Становая тяга', description: 'Исходное положение: стоя, колени немного согнуты, стопы параллельны на ширене плеч или немного уже, спина прогнута, корпус наклонен вперед, хват разный. При выдохе плавно и равномерно поднимите штангу, подъем таза и корпуса должен быть параллельным, в верхней точке сведите лопатки, при вдохе медленно опустите штангу до касания с полом, но не ставьте ее на пол.', img: '' },
                    { id: 302, place: 'gym', name: 'Гиперэкстензия', description: 'Исходное положение: руки скрещены на груди, стопы зафиксированы на тренажере. Ноги и спина - на одной линии. На вдохе опускаем прямую спину вниз, насколько возможно, на выдохе поднимаем корпус до прямого положения с ногами.', img: '' },
                    { id: 303, place: 'home', name: 'Лодочка, лежа на животе', description: 'Лодочка - уникальное упражнение, которое задействует одновременно мышцы спины и ягодицы, тем самым укрепляя их. Прекрасное упражнение для поддержания правильной осанки. Лягте на пол лицом вниз. Потяните руки вперёд, а ноги - назад. Выдыхая, напрягите ягодицы и поясницу. Оторвите от пола руки и ноги. Делаем задержку на пару секунд, затем вдыхая, плавно опуститесь в ИП', img: '' },
                    { id: 304, place: 'gym', name: 'Тяга блока сидя к поясу узким хватом', description: 'Исходное положение: сидя в блоке, колени чуть согнуты, спина - перпендикулярно полу, большой палец зафиксирован сверху рукояти и, таким образом, кисть выполняет роль крюка. На выдохе - подтягивание рукояти к поясу, спина чуть отклоняется назад с небольшим прогибом в пояснице; на вдохе - опускание рукояти с возвращением изначального положения спины.', img: '' },

                ]
            },

        ]
    },
    {
        russinName: 'Вторник', workouts: [
            { id: 1111, rus: 'День отдыха', exercises: [] }
        ]
    },
    {
        russinName: 'Среда', workouts: [
            {
                id: 2, value: 'leg', rus: "Мышцы ног", exercises: [
                    { id: 201, place: 'gym', name: 'Приседания со штангой', description: 'Исходное положение: ноги ставим чуть шире плеч, стопы слегка разведены в стороны, гриф фиксируем в верхней области спины, чуть выше лопаток. Приседаем так, чтобы в нижнем положении таз был чуть ниже коленей. Спину следует держать строго в прямом положении. При приседании - вдох, при подъеме - выдох.', img: '' },
                    { id: 202, place: 'home', name: 'Выпады', description: 'Исходное положение: стоя, ноги вместе, руки на поясе. При вдохе делаем шаг вперед и приседаем до положения, когда обе ноги в коленях образуют 90 градусов. В нижнем положении задняя нога стоит на носке. При выдохе встаем в исходное положение. Далее поочередно меняем переднюю ногу.', img: '' },
                    { id: 203, place: 'gym', name: 'Жим ногами', description: 'Исходное положение: лежа, поясница прижата к спинке тренажера, ноги расположены широко, на середине платформы, мыски развернуты в стороны. Вдох - сгибаем ноги, колени идут глубоко вдоль туловища, выдох - разгибаем ноги, выжимая платформу, не выпрямляя колени до конца.', img: '' },
                    { id: 204, place: 'home', name: 'Бёрпи для начинающих без прыжка', description: 'Исходное положение: встаньте прямо, ноги на ширине плеч. Согните колени и сделайте глубокий присед, опираясь руками в пол. Выпрыгните назад и примите позицию планки. Тело должно сохранять прямую линию, бедра и поясница не должны пригибаться к полу. Ладони находятся строго под плечевыми суставами. Прыгните вперед, подтянув колено к ногам. Бедра параллельно полу, не задирайте ягодицы вверх. Резко выпрыгните, поднимая руки и тело вверх. Обратите внимание, спина прямая, взгляд направляется вперед, корпус и ноги образуют прямую линию. Вес тела не переносится на спину, движение выполняется легко и динамично.', img: '' },

                ]
            },
            {
                id: 4, value: 'shoulder', rus: "Плечи", exercises: [
                    { id: 401, place: 'gym', name: 'Жим гантелей сидя', description: 'Исходное положение: сидя на скамье, спинка которой чуть отклонена назад; поднимаем гантели над головой на выдохе, опускаем гантели на вдохе, практически касаясь ими плеч.', img: '' },
                    { id: 402, place: 'gym', name: 'Отведения назад сидя в тренажере (бабочка)', description: 'Исходное положение: сидя в тренажере, руки держим вместе перед собой. На выдохе равномерно отводим руки назад, задерживаемся на секунду, на вдохе равномерно сводим руки вместе.', img: '' },
                    { id: 403, place: 'gym', name: 'Подъем гантелей в стороны стоя', description: 'Исходное положение: колени чуть согнуты, корпус немного наклонен вперед с чуть согнутой поясницей (для изоляции переднего пучка дельтовидной мышцы (ДМ)) и, таким образом, смещением нагрузки на средний пучок ДМ. При поднятии гантелей - выдох, при опускании - вдох.', img: '' },
                    { id: 404, place: 'gym', name: 'Подъем гантелей в наклоне', description: 'Исходное положение: ноги чуть шире плеч, корпус с прямой спиной и небольшим прогибом в пояснице наклоняем максимально вперед, практически до параллели полу. Гантели держим напротив груди с согнутыми в локтях руками. На выдохе отводим максимально гантели вверх, стараясь не прижимать локти к корпусу. На вдохе опускаем руки.', img: '' },

                ]
            },
        ]
    },
    {
        russinName: 'Четверг', workouts: [
            { id: 1111, rus: 'День отдыха', exercises: [] }
        ]
    },
    {
        russinName: 'Пятница', workouts: [
            {
                id: 5, value: 'biceps', rus: "Бицепсы", exercises: [
                    { id: 501, place: 'gym', name: 'Сгибание рук на скамье Ларри-Скотт', description: 'Исходное положение: сидя на скамье, хват на ширине плеч. При поднятии грифа - выдох, при опускании - вдох. Гриф нужно опускать равномерно, без резких движений.', img: '' },
                    { id: 502, place: 'gym', name: 'Молот', description: 'Исходное положение: стоя, гантели нужно взять так, чтобы ладони были повернуты друг к другу. При выдохе поднимаем гантель одной руки на 3/4, задерживаем на секунду и при вдохе опускаем, затем поочередно меняем руки.', img: '' },
                    { id: 503, place: 'gym', name: 'Бицепс сидя в тренажере Ларри Скотта', description: 'Исходное положение: сидя в тренажере. На выдохе равномерно поднимаем руки, на секунду задерживаем, на вдохе равномерно опускаем', img: '' },
                    { id: 504, place: 'gym', name: 'Сгибание рук обратным хватом на нижнем блоке', description: 'Исходное положение: стоя у блока, руки направлены вниз, ладони развернуты к себе. На выдохе сгибаем руки, в верхней точке задерживаем на секунду, на вдохе равномерно разгибаем руки.', img: '' },

                ]
            },
            {
                id: 6, value: 'triceps', rus: "Трицепс", exercises: [
                    { id: 601, place: 'gym', name: 'Жим лежа узким хватом', description: 'Исходное положение: лежа на скамье, хват на ширине плеч или немного уже, локти и ладони повернуты в сторону ног. При опускании штанги - вдох, опускаем штангу на низ груди, при поднятии - выдох.', img: '' },
                    { id: 602, place: 'home', name: 'Обратные отжимания на трицепс', description: 'Исходное положение: руки - на ширине плеч на скамье / платформе, ноги - прямые в коленях. На вдохе - сгибаем локти и опускаем таз практически до касания с полом; на выдохе - поднимаем таз, разгибая руки в локтях.', img: '' },
                    { id: 603, place: 'gym', name: 'Тяга блока стоя на трицепс', description: 'Исходное положение: стоя, ноги чуть согнуты в коленях, корпус немного наклонен вперед, небольшой прогиб в пояснице. Берем рукоять чуть уже ширины плеч. Стараемся выпрямить руки, практически касаясь ног в нижней фазе. При выпрямлении рук в локтях - выдох, при сгибании рук - вдох.', img: '' },
                    { id: 604, place: 'gym', name: 'Французский жим лежа', description: 'Исходное положение: лежа на горизонтальной скамье, поясница прижата, держим гриф узким хватом (чуть уже ширины плеч) на уровне глаз. Сгибаем локти на вдохе и опускаем гриф почти до касания с головой - в область, чуть выше лба. Затем выпрямляем руки в локтях на выдохе, доводя гриф до уровня глаз.', img: '' },

                ]
            },
        ]
    },
    {
        russinName: 'Суббота', workouts: [
            { id: 1111, rus: 'День отдыха', exercises: [] }
        ]
    },
    {
        russinName: 'Воскресенье', workouts: [
            { id: 1111, rus: 'День отдыха', exercises: [] }
        ]
    },
]

const Program = () => {
    return (
        <div>
            <ListGroup variant="flush">
                {program.map(({ russinName, workouts }) => (
                    <ListGroup.Item key={russinName}>
                        <div className="programDay">
                            <div>{russinName}</div>
                            <button>Добавить тренировку</button>
                        </div>
                        <ListGroup>
                            {workouts.map(({ id, rus, exercises }) => (
                                <ListGroup.Item key={id}>
                                    <div className="programDay">
                                        <div>{rus}</div>
                                        <button>Добавить упражнение</button>
                                    </div>
                                    <ListGroup>
                                        {exercises.map(({ id, name }) => (
                                            <ListGroup.Item key={id}>
                                                {name}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default Program;