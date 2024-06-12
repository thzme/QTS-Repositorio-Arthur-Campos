import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Laís', 'Davi', 'Bruno Aparecido Cano', 'Alan']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");

})

Deno.test("Testando array do professor (API)", ()=>{
    assertArrayIncludes(professores,
    ["Davi", "Laís", "Alan"],
    "Opa! Algo deu errado!");
})