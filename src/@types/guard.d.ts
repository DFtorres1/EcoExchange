type RoutesType = {
  id: string;
  path?: string;
  guard?: React.FC;
  component?: any;
  routes?: RoutesType[];
};

type GuardRoleProps = (
  roles?: Role[]
) => React.FC<React.PropsWithChildren<unknown>>;
