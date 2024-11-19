
export function Footer() {
    return (
        <footer className="flex flex-col justify-center   w-screen h-auto">
            <section className="flex flex-row justify-around pt-2">
                <article className="flex flex-col ">
                    <h2 className="opacity-50">Categorías</h2>
                    <h3>Cursos</h3>
                    <h3>Aplicaciones</h3>
                    <h3>Vende un Curso</h3>
                    <h3>Vende una App</h3>
                </article>
                <article className="flex flex-col">
                    <h2 className="opacity-50">Acerca de</h2>
                    <h3>Instructores</h3>
                    <h3>Cursos</h3>
                    <h3>Términos y condiciones</h3>
                    <h3>Politicas de Privacidad</h3>
                </article>
                <article className="flex flex-col">
                    <h2 className="opacity-50">Soporte</h2>
                    <h3>FAQ</h3>
                    <h3>Contacto</h3>
                    <h3>Foro</h3>
                </article>
                <article className="flex flex-col">
                    <h2 className="opacity-50">Encuéntranos en.</h2>
                    <div className="flex flex-row">
                        <h3>Cursos</h3>
                        <h3>Aplicaciones</h3>
                        <h3>Vende un Curso</h3>
                    </div>
                </article>


            </section>
            <section className="flex justify-center mt-10 border-t-2 pt-3 border-white">
                <h2>© Klowhub</h2>
            </section>
        </footer>
    )
}