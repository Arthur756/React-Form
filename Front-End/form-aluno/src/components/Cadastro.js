import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from './TextField'
import * as Yup from 'yup';

export const Cadastro = () => {
    const validate = Yup.object({
        cpf: Yup.string()
        .max(11, 'CPF inválido')
        .required('Obrigatório'),
        email: Yup.string()
        .max('E-mail inválido')
        .required('Obrigatório'),
        telefone: Yup.string()
        .min(9, 'Telefone inválido')
        .required('Obrigatório')
    })
    return (
        <Formik
            initialValues={{
                nome: '',
                cpf: '',
                sexo: [],
                email: '',
                telefone: ''
            }}
            validationSchema={validate}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Cadastro de Alunos</h1>
                    <Form>
                        <TextField label="Nome" name="nome" type="text" />
                        <TextField label="CPF" name="cpf" type="text" />
                        <span>Sexo</span>
                        <div id="checkbox-group" label="Sexo"></div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>
                                    <Field type="radio" name="checked" value="Masc" />
                                &nbsp; Masculino
                                </label>
                                <br/>
                                <label>
                                    <Field type="radio" name="checked" value="Fem" />
                                &nbsp; Feminino
                                </label>
                                <br/>
                                <label>
                                    <Field type="radio" name="checked" value="PnD" />
                                &nbsp; Prefiro não dizer
                                </label>
                        </div>

                        <TextField label="E-mail" name="email" type="text" />
                        <TextField label="Telefone" name="telefone" type="text" />
                        <button className="btn btn-dark mt-3" type="submit">Cadastrar</button>


                    </Form>
                </div>
            )}
        </Formik>
    )
}