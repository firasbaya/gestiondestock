import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

import GlobalIcon from "../icons/GlobalIcon";
import ImxBarCodeScanner from "../scanner/ImxBarCodeScanner";

function InputTextScanner({ selectedValue }) {
  const [hideModal, setModalHidden] = useState(true);

  return (
    <>
      <GlobalIcon
        iconName="barcode"
        iconSize={18}
        pressSize={28}
        iconColor="#6f53a3"
        onPress={() => setModalHidden(false)}
      />

      {!hideModal && (
        <Modal>
          <ImxBarCodeScanner
            triggerScanned={() => setModalHidden(true)}
            valueScanned={(value) => {
              selectedValue(value);
            }}
          />
          {/* <Button
            title="Close"
            onPress={() => {
              setModalHidden(true);
              selectedValue("fromScanner");
            }}
          ></Button> */}
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default InputTextScanner;