import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as s from './styles';

const Authenticator = () => {
  return (
    <TabsPrimitive.Root defaultValue="tab1" className={s.root()}>
      <TabsPrimitive.List aria-label="Manage your account" className={s.list()}>
        <TabsPrimitive.Trigger value="tab1" className={s.trigger()}>
          Account
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger value="tab2" className={s.trigger()}>
          Password
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>

      <TabsPrimitive.Content value="tab1" className={s.content()}>
        <div className={s.text()}>
          {`Make changes to your account here. Click save when you're done`}.
        </div>
        <fieldset className={s.fieldset()}>
          <label htmlFor="name" className={s.label()}>
            Name
          </label>
          <input id="name" defaultValue="Diego Silva" className={s.input()} />
        </fieldset>
        <fieldset className={s.fieldset()}>
          <label htmlFor="username" className={s.label()}>
            Username
          </label>
          <input
            id="username"
            defaultValue="@diegosilva"
            className={s.input()}
          />
        </fieldset>
        <div
          className={s.flex()}
          style={{ marginTop: 20, justifyContent: 'flex-end' }}
        >
          <button className={s.button({ variant: 'green' })}>
            Save changes
          </button>
        </div>
      </TabsPrimitive.Content>

      <TabsPrimitive.Content value="tab2" className={s.content()}>
        <div className={s.text()}>
          {`Change your password here. After saving, you'll be logged out.`}.
        </div>

        <fieldset className={s.fieldset()}>
          <label htmlFor="currentPassword" className={s.label()}>
            Current password
          </label>
          <input id="currentPassword" type="password" className={s.input()} />
        </fieldset>
        <fieldset className={s.fieldset()}>
          <label htmlFor="newPassword" className={s.label()}>
            New password
          </label>
          <input id="newPassword" type="password" className={s.input()} />
        </fieldset>
        <fieldset className={s.fieldset()}>
          <label htmlFor="confirmPassword" className={s.label()}>
            Confirm Password
          </label>
          <input id="confirmPassword" type="password" className={s.input()} />
        </fieldset>
        <div
          className={s.flex()}
          style={{ marginTop: 20, justifyContent: 'flex-end' }}
        >
          <button className={s.button({ variant: 'green' })}>
            Change password
          </button>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
};

export default Authenticator;
