import { PatientStoreModel } from "./../patient-store/patient-store";
import { PayerStoreModel } from "./../payer-store/payer-store";
import { AuthStoreModel } from "./../auth-store/auth-store";
import { EventStoreModel } from "./../event-store/event-store";
import { UserStoreModel } from "./../user-store/user-store";
import { types, Instance, SnapshotOut } from "mobx-state-tree";
import { NotificationStoreModel } from "../notification/notification-store";
import { SettingStoreModel } from "../settings-store/setting-stote";

// prettier-ignore
export const RootStoreModel = types
  .model("RootStore")
  .props({
    userStore: types.optional(UserStoreModel, {}),
    eventStore: types.optional(EventStoreModel, {}),
    authStore: types.optional(AuthStoreModel, {}),
    payerStore: types.optional(PayerStoreModel, {}),
    patientStore: types.optional(PatientStoreModel, {}),
    notificationStore: types.optional(NotificationStoreModel, {}),
    settingStore: types.optional(SettingStoreModel, {}),
  })
  .actions((self) => ({}));

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> { }

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }
