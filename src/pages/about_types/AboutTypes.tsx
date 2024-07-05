import './AboutTypes.css'

export function AboutTypes(props: React.HTMLAttributes<HTMLDivElement>) {

  type Person = {
    name: string,
    age?: number | string,
    isStudent?: boolean,
    hobbies?: string[],
    role?: [number, string]
  }

  const josicleison: Person = {name: 'Josicleison'}

  josicleison.age = 20
  josicleison.isStudent = true
  josicleison.hobbies = ['Sports', 'Cooking']
  josicleison.role = [2, 'author']

  let showName: (person: Person) => JSX.Element = person => {
    return <h2>Name: {person.name}</h2>
  }

  type X = {
    a: string,
    b: number
  }
  type Y = X & {
    c: boolean,
    d: string
  }
  let y: Y = {a: 'a', b: 1, c: true, d: 'd'}

  interface Animal extends X {
    name: string
  }

  interface Cow extends Animal {
    milk_quality: string
  }

  function showDescription(person: Person) {
    return (
      `Age: ${person?.age}
      Is Student: ${person?.isStudent}
      Hobbies: ${person?.hobbies?.join(', ')}
      Role: ${person?.role?.join(', ')}`
    ).split('\n').map((line, index) => <p key={index}>{line}</p>)
  }

  return (
    <div className='about-types'>
      {showName(josicleison)}<br/>
      {showDescription(josicleison)}<br/>
      {JSON.stringify(y)}
    </div>
  )
}