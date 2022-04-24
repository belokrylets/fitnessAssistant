import { IResult } from "../types/calorieCalculator";

interface IActivityCoefficients {
    [key: string]: number;
}

const activityCoefficients: IActivityCoefficients = {
    passive: 1.2,
    light: 1.35,
    average: 1.55,
    high: 1.75,
    extreme: 1.95,
}

const calculatoralories = (target: string, activity: string, gender: string, weight: number, growth: number, age: number): IResult => {
    let basalMetabolicRate = 0;
    let calories = '';
    let proteins = 2 * weight;
    let carbohydrates = 0;
    let fats = 0;
    if (gender === 'male') {
        basalMetabolicRate = (9.99 * weight) + (6.25 * growth) - (4.92 * age) + 5;
    }
    if (gender === 'female') {
        basalMetabolicRate = (9.99 * weight) + (6.25 * growth) - (4.92 * age) - 161;
    }
    const exerciseAssociatedThermogenesis = basalMetabolicRate * activityCoefficients[activity];

    if (target === 'gain') {
        calories = `${Math.round(exerciseAssociatedThermogenesis * 1.1)} - ${Math.round(exerciseAssociatedThermogenesis * 1.2)}`;
        fats = weight;
        carbohydrates = ((exerciseAssociatedThermogenesis * 1.2 - (proteins * 4 + fats * 9)) / 4);
    }
    if (target === 'loss') {
        calories = `${Math.round(exerciseAssociatedThermogenesis * 0.8)} - ${Math.round(exerciseAssociatedThermogenesis * 0.9)}`
        fats = 60;
        carbohydrates = ((exerciseAssociatedThermogenesis * 0.8 - (proteins * 4 + fats * 9)) / 4);
    } if (target === 'safe') {
        calories = `${Math.round(exerciseAssociatedThermogenesis)}`
        fats = weight;
        carbohydrates = ((exerciseAssociatedThermogenesis - (proteins * 4 + fats * 9)) / 4);
    }
    return {
        calories: calories,
        proteins: proteins,
        carbohydrates: Math.round(carbohydrates),
        fats: fats,
    }
}

export default calculatoralories;
