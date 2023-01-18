import { Header } from '../../components/Header';
import { Conteudo, TituloColuna,Titulo,Subtitulo,Coluna,Capa,Texto,Texto2,Destaque } from './styles';
import {Input} from '../../components/Input';
import { MdEmail, MdLock,MdAccountCircle } from 'react-icons/md';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate  } from "react-router-dom";
import { api } from '../../services/api';
import { Button } from '../../components/Button';

export const Cadastro = () =>{
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.post(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }alert('Usuário ou senha inválido')
        }catch(e){
           console.log(e);
        }
        
    };
  
    console.log('errors', errors);
return(<>

    <Header />
   
            <Conteudo>
            <Coluna>
                <TituloColuna>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</TituloColuna>
                <Titulo>Comece agora grátis</Titulo>
                <Subtitulo>Crie sua conta e make the change</Subtitulo>]
    </Coluna>   
                <Coluna>
                <Capa>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome Completo" leftIcon={<MdAccountCircle />} name="text"  control={control} />
                    {errors.name && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="senha" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar Minha Conta" variant="secondary" type="submit"/>
                </form>
                <Texto>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Texto>
                <Texto2>Já tenho conta. Fazer<Destaque> login</Destaque></Texto2>
                
                </Capa>
                </Coluna>
               
                
                

                

            </Conteudo>






</>)

   
    
}



