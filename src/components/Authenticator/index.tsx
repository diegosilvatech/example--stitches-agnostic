import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as s from './styles';

const Authenticator = () => {
  return (
    <TabsPrimitive.Root defaultValue="tab1" className={s.root()}>
      <TabsPrimitive.List aria-label="Gerencie sua conta" className={s.list()}>
        <TabsPrimitive.Trigger value="tab1" className={s.trigger()}>
          Conta
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger value="tab2" className={s.trigger()}>
          Senha
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>

      <TabsPrimitive.Content value="tab1" className={s.content()}>
        <div className={s.text()}>
          Faça alterações em sua conta aqui. Clique em salvar quando terminar.
        </div>
        <fieldset className={s.fieldset()}>
          <label htmlFor="name" className={s.label()}>
            Nome
          </label>
          <input id="name" defaultValue="Diego Silva" className={s.input()} />
        </fieldset>
        <fieldset className={s.fieldset()}>
          <label htmlFor="username" className={s.label()}>
            Usuário
          </label>
          <input
            id="username"
            defaultValue="@diegosilvatech"
            className={s.input()}
          />
        </fieldset>
        <div
          className={s.flex()}
          style={{ marginTop: 20, justifyContent: 'flex-end' }}
        >
          <button className={s.button({ variant: 'primary' })}>Salvar</button>
        </div>
      </TabsPrimitive.Content>

      <TabsPrimitive.Content value="tab2" className={s.content()}>
        <div className={s.text()}>
          Altere sua senha aqui. Após salvar, você será desconectado.
        </div>

        <fieldset className={s.fieldset()}>
          <label htmlFor="currentPassword" className={s.label()}>
            Senha atual
          </label>
          <input id="currentPassword" type="password" className={s.input()} />
        </fieldset>
        <fieldset className={s.fieldset()}>
          <label htmlFor="newPassword" className={s.label()}>
            Nova senha
          </label>
          <input id="newPassword" type="password" className={s.input()} />
        </fieldset>
        <fieldset className={s.fieldset()}>
          <label htmlFor="confirmPassword" className={s.label()}>
            Confirme a nova senha
          </label>
          <input id="confirmPassword" type="password" className={s.input()} />
        </fieldset>
        <div
          className={s.flex()}
          style={{ marginTop: 20, justifyContent: 'flex-end' }}
        >
          <button className={s.button({ variant: 'primary' })}>Alterar</button>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
};

export default Authenticator;
