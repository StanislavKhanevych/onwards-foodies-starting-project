export default function MealItem({params}) {
    return (
        <main>
            <h1>Meal Item</h1>
            <h1>{params.slug}</h1>
        </main>
    )
}