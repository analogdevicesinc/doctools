<!-- lastmod 2022-08-04 -->
## MAX7032 Evaluation Kit

## General Description

The MAX7032 evaluation kit allows for a detailed evaluation  of  the  MAX7032 ASK/FSK transceiver, capable of operating  in  the  300MHz  to  450MHz  frequency  range. The device generates a typical output power of +10dBm into a  50Ω  load  and  exhibits  typical  sensitivities  of -114dBm  for ASK  and  -110dBm  for  FSK  data.  The  RF input  uses  a  50Ω  matching  network  and  an  SMA  con -nector  for  convenient  connection  to  test  equipment. The MAX7032 EV kit operates in conjunction with an external microcontroller (MCU) and graphical user interface (GUI) software running on a computer. The MAX7032 uses a SPI interface for internal register configuration.

The  MAX7032  EV  kit  comes  in  two  versions:  a  315MHz version and a 433.92MHz version. The passive components are optimized for these frequencies. These components can easily be changed to work at RF frequencies from 300MHz to 450MHz.

For easy implementation into the customer's design, the MAX7032  EV  kit  also  features  a  proven  Printed  Circuit Board (PCB) layout,  which  can  be  easily  duplicated  for quicker time-to-market. The PCB gerber files are available for download at www.maximintegrated.com .

Evaluates: MAX7032

## Features

- Proven PC Board Layout
- Proven Components Parts List
- Multiple Test Points Provided on Board
- Available in 315MHz or 433.92MHz Optimized Versions
- Adjustable Frequency Range from 300MHz to 450MHz with Component Changes
- Windows 10-Compatible Software
- Fully Assembled and Tested
- Can Operate as a Stand-Alone Receiver with a User-Provided Connector and Antenna

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## Quick Start

The MAX7032ASK/FSK transceiver communicates setup information through a 3-wire SPI port.  With the MAX7032 evaluation board, this is done by connecting to the FTHR board  microcontroller.  The  FTHR  connects  to  the  USB port  of  a  computer  and  to  the  MAX7032EVKIT  board through  a  header-pin  connection.  The  MAX7032  EV  kit can get its DC power from the computer through the USB port or it can be powered separately from a bench supply or battery by setting jumpers on the MAX7032 evaluation board.

## Required Equipment

- MAX7032 EV kit board
- FTHR microcontroller board
- USB cable (enclosed with EV kit)
- Regulated power supply (not needed if EV kit is powered by the FTHR board)
- RF signal generator capable of delivering from -120dBm to 0dBm of output power at the operating frequency (Agilent E4420B or equivalent)
- Modulation of the RF generator in ASK or FSK mode (may be built-in)
- Optional ammeter for measuring supply current
- Dual-trace oscilloscope
- RF power meter (Agilent 436A or equivalent) or spectrum analyzer

## Software and Drivers

The MAX7032 EV kit can be used in conjunction with the Arm ® Cortex ® -M4  processor  with  FPU  microcontroller MAX32630FTHR  application  platform  or  'FTHR'  board to  provide  power  and  control  of  the  device  through  a software  application  or  GUI.  For  this  option,  additional equipment is required.

When connected to the FTHR board, the MAX7032 EV kit  uses the following drivers and software components. See Appendix I for additional information on this installation process.

- ISM Radios GUI

The software, firmware, and drivers are available from the Maxim website . Log in to your MyMaxim account on the website, search for the MAX7032 IC or EV kit, click on Design &amp; Development , and click on the appropriate software link. Finally, click the file link on the software landing page to download the ISM Radios GUI package.

## ● mBed MAX32630FTHR and DAPLINK Interface System

The DAPLINK system should not be required unless a firmware update to the FTHR board has been released. The FTHR board included in the MAX7032 EV kit is preprogrammed for interfacing the GUI to the radio. The firmware programming process does not require additional software or drivers-it uses a simple USB drive, drag-and-drop file interface.

It is highly recommended that the target PC is connected to a local area network and has access to the Internet to allow for automatic download and updates of drivers. This process may take five minutes or more to complete.

## Install the ISM Radios GUI Software

This  process  should  take  less  than  five  minutes  after downloading  the  software  package.  See Appendix  I for detailed information on this installation process.

- 1) Download the ISM Radios GUI software.
- 2) Double-click the 'ISMRadiosGUISetup.msi' setup file and follow the Setup Wizard prompts.
- a) Click Next in the ISM Radios GUI Setup Wizard window.
- b) It is recommended to use the default destination folder. Click Next to continue.
- c) Install the software by clicking the Install button.
- d) Click Finish when the ISM Radios GUI Setup Wizard installation process is complete.

Additional register and QuickStart files may be included in future GUI versions as the ISM Radios GUI is designed to support the ISM family of parts.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

## MAX7032 Evaluation Kit

## Update the MAX32630FTHR Board Driver on the Host PC

Evaluates: MAX7032

FTHR board firmware and the driver for the FTHR board/ USB interface.

No changes are needed for the FTHR board when first receiving a MAX7032 EV kit-the FTHR board has been pre-loaded  with  the  required  firmware.  Updates  to  the driver  on  the  host  PC  may  be  necessary  depending  on the operating system and whether the PC has access to the internet when first connecting to the FTHR board. See Appendix I for detailed information on how to update the

## Connections and Setup

The MAX7032 EV kit board is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Ensure jumpers are in the default position where JU5 has a jumper installed 1-2, and J1 has a jumper installed in 1-2, positions as noted in Table 1.

## Table 1. MAX7032 EV Kit Installed Files and Folders

| FILE NAME                | DESCRIPTION                                           |
|--------------------------|-------------------------------------------------------|
| ISMRadiosGUISetup.msi    | Application GUI                                       |
| MaximStyle.dll           | Supporting DLL file for software operation            |
| MAX4147X_Registers.xml*  | Register definition file for MAX4147X                 |
| MAX4146X_Registers.xml * | Register definition file for MAX4146X                 |
| MAX1471_Registers.xml *  | Register definition file for MAX1471                  |
| MAX7032_Registers.xml    | Register definition file for MAX7032                  |
| MAX4147X_QuickStart.xml* | Quick start configuration file for MAX4147X           |
| MAX1471_QuickStart.xml * | Quick start configuration file for MAX1471            |
| MAX7032_RXQuickStart.xml | Quick start configuration file for MAX7032 receive    |
| MAX7032_TXQuickStart.xml | Quick start configuration file for MAX7032 transmit   |
| Firmware                 | Folder for current FW at the time of the GUI download |

*Not used in this evaluation, but provided with the common platform.

Figure 1. MAX7032 EV Kit Jumpers

<!-- image -->

## MAX7032 Evaluation Kit

- 2) Connect the MAX7032 EV kit to the FTHR board, making certain that the USB connector is oriented on the opposite side of the SMA connector, as shown in Figure 2.
- 3) Connect the FTHR board to the PC using a USB micro-B cable and observe a 'heartbeat' on the FTHR board's red LED (on the opposite side of the board from the USB connector).

Evaluates: MAX7032

- 4) Connect the SMA cable to the RFIN SMA. This is either the input for the signal to be received, or it is the output of the transmitter.
- 5) Start the ISM Radios GUI.
- a) A GUI splash screen is displayed, as shown in Figure 3.
- b) To disable future displays of the splash screen, select Disable Splash .

Figure 2. MAX7032 EV Kit to FTHR Board

<!-- image -->

Figure 3. ISM Radios GUI Splash Screen

<!-- image -->

## MAX7032 Evaluation Kit

- 6) The pop-up window (Figure 4) asks to select a device from the Device tab to get started; click OK .

Evaluates: MAX7032

- 7) Under the Device menu option pulldown, select MAX7032/31/30-TRx ( Figure 5). The GUI tabs populate in the window, as shown in Figure 6.

Figure 4. ISM Radios GUI Device Selection Reminder

<!-- image -->

Figure 5. ISM Radios GUI Device Selection

<!-- image -->

Evaluates: MAX7032

Figure 6. ISM Radios GUI Software Startup

<!-- image -->

## MAX7032 Evaluation Kit

- 8) If the EV kit was connected prior to starting the GUI, the expected COM port should be displayed. Select the appropriate COM port from the drop-down list (Figure 7) and click the Connect button. The Connect button changes to the Disconnect button. The COM port can be verified through the Windows device manager. The FTHR board may display under the COM ports as 'Teensy USB Serial' or 'Maxim USB-to-UART Adapter' and displays the associated port number.

## Evaluates: MAX7032

- 9) Confirm that the firmware status bar has changed from 'ISM Radios x.x.x' to 'ISM Radios 4.0.1' or later, the software LED is lit green, and the port status is noted as ' Connected ' (Figure 8).
- 10)  Enter a supply level into the Voltage field and click the Set button (Figure 9).
- 11)  Select the MAX7032 in the Device Type drop-down list and click the Set button (Figure 10).
- 12)  Power on the device by clicking TURN ON , which updates the status (Figure 11).

<!-- image -->

Figure 7. COM Port

<!-- image -->

Figure 8. Connected, Indicators at Bottom of GUI

<!-- image -->

Figure 9. Supply Voltage Example

Figure 10. Part Selection

<!-- image -->

Figure 11. Power On (a) and Power Off (b) Status

<!-- image -->

Evaluates: MAX7032

Figure 12. Connected and Power-On GUI State

<!-- image -->

## MAX7032 Evaluation Kit

## Configure as Receiver with ASK Modulation - RX ASK

- 1) Configure the device, either through the Quick Start or the GUI configuration selections.
- a) Quick Start
- i) Click the Quick Start RX button (Figure 13) for an ASK receive configuration.
- b) GUI Drop-Down and Entry Selections (Figure 14)
- i) Enable the T/ R toggle switch to put the device in Receive mode.
6. ii) Select ASK in the Modulation drop-down list.

Evaluates: MAX7032

- iii) Click Set for the Crystal Oscillator setting of '17.63416'.
- iv) Ensure the following toggle switches are enabled (active): LNA , AGC , MIXER , BaseB , PkDet , FCAL , and RSSIO .
- v) Ensure all other toggle switches not listed are disabled.
- vi) Set DT to 'K = 13' in the drop-down list.
- 2) Connect the DATA test point to an oscilloscope to see the output data stream or view through the Time Plot sampler (Figure 15). (See Time Plot in the Detailed Description of Software section.)

Figure 13. Quick Start TX and Quick Start RX Buttons

<!-- image -->

Figure 14. Device Settings for ASK Receiver

<!-- image -->

## MAX7032 Evaluation Kit

## Configure as Receiver with FSK Modulation - RX FSK

- 1) Configure the device through GUI configuration selections.
- a) GUI Drop-Down and Entry Selections (Figure 14)
- i. Enable the T/ R toggle switch to put the device in Receive mode.
- ii. Select FSK in the Modulation in the dropdown list.
- iii. Click Set for the Crystal Oscillator setting of '17.63416'.
- iv. Ensure the following toggle switches are enabled (active): LNA , AGC , MIXER , BaseB , PkDet , FCAL , and RSSIO .
- v. Ensure all other toggle switches not listed are disabled.
- vi. Set DT to 'K = 13' in the drop-down list.
- 2) Connect the DATA test point to an oscilloscope to see the output data stream or through the Time Plot sampler (Figure 15). (See Time Plot in the Detailed Description of Software section.)

Evaluates: MAX7032

## Configure as Transmitter with ASK Modulation - TX ASK

- 1) Connect the RFIN to a spectrum analyzer.
- a) Center frequency at desired frequency, span of 200kHz, resolution bandwidth of 300Hz, video bandwidth to Auto or 10kHz.
- 2) Configure the device through GUI configuration selections.
- a) Quick Start
- i. Click the Quick Start TX button (Figure 13) for an ASK transmit configuration at 433.92MHz and oscillator of 17.63416MHz.
- b) GUI Drop-Down and Entry Selections (Figure 14)
- i. Disable the T/ R toggle switch to put the device in Transmit mode.
- ii. Select ASK in the Modulation in the dropdown list.
- iii. Click Set for the Crystal Oscillator setting of '17.63416'.
- iv. Click Set for the Center Frequency of '433.92'.

Figure 15. Device Settings for FSK Receiver

<!-- image -->

## MAX7032 Evaluation Kit

- v. The following toggle switches can be enabled (active): LNA , AGC , MIXER , BaseB , PkDet , and RSSIO .
- vi. Ensure the other toggle switches not listed are currently disabled.
- vii.  Set DT to 'K = 13' in the drop-down list.
- 3) If set up through the quick start, go to step 5.
- 4) If manually set up, enable the PA toggle switch to start the transmitter.  Set the Message box in the TX Data Control block to 0xAA.  Click on the Cont checkbox for continuous data transmission.  With '4'

## Evaluates: MAX7032

- as the default setting in the Bitrate field, click Set . Then click on Send Data button.
- 5) Evaluate the device performance on the spectrum analyzer.
- a) If using the default Manchester 0xAA pattern, the expected output power will be around +6dBm.
- b) If attempting to see higher output power, the message can be changed to 0xFF 0xFF and the Manchester selection can be unchecked (so that NRZ data is transmitted), and the expected output power will then be around +12dBm.

Figure 16. Quick Start TX Button

<!-- image -->

Figure 17. Device Settings for ASK Transmitter

<!-- image -->

## MAX7032 Evaluation Kit

## Configure as Transmitter with FSK Modulation - TX FSK

- 1) Connect the RFIN to a spectrum analyzer.
- a) Center frequency at desired frequency, span of 200kHz, resolution bandwidth of 300Hz, video bandwidth to auto or 10kHz.
- 2) Configure the device through GUI configuration selections.
- a) GUI Drop-Down and Entry Selections (Figure 14)
- i. Disable the T/ R toggle switch to put the device in Transmit mode.
- ii. Select FSK in the Modulation in the dropdown list.
- a.  A popup reminder will warn to set the FSK Frequency Deviation.
- iii. Click Set for the Crystal Oscillator setting of '17.63416'.
- iv. Click Set for the Center Frequency of '433.92'.
- v. Set the Frequency Deviation to '50' and click Set .
- vi. The following toggle switches can be enabled (active): LNA , AGC , MIXER , BaseB , PkDet , and RSSIO .

Figure 18.  Device Settings for FSK Transmitter

<!-- image -->

## Evaluates: MAX7032

- vii.  Ensure the other toggle switches not listed are currently disabled.
- viii.  Set DT to 'K = 13' in the drop-down list.
- 3) If set up through the quick start, go to step 5.
- 4) If manually set up, enable the PA toggle switch to start the transmitter. Set the Message box in the TX Data Control block to 0xAA. Click on the Cont checkbox for continuous data transmission. With '4' as the default setting in the Bitrate field, click Set . Then click on Send Data button.
- 5) Evaluate the device performance on the spectrum analyzer.
- a) If using the default Manchester 0xAA pat -tern, the expected output power will be around +6dBm.
- b) If attempting to see higher output power, the message can be changed to 0xF 0xFF and the Manchester selection can be unchecked (so that NRZ data is transmitted), and the expected output power will then be around +12dBm.

## Detailed Description of Hardware

## Layout Issues

A properly designed PCB is essential for any RF/microwave circuit. Keep high-frequency input and output lines as short as possible to minimize losses and radiation. At high  frequencies,  trace  lengths  that  are  on  the  order  of λ/10 or longer can act as antennas.

Both  parasitic  inductance  and  capacitance  are  influential  on  circuit  layouts  and  are  best  avoided  by  using short trace lengths. Generally, a 10-mil wide PCB trace, 0.0625in above a ground plane, with FR4 dielectric has about 19nH/in of inductance and about 1pF/in of capacitance. In the LNA output/mixer input tank circuit, the prox -imity  to  the  MAX7032  IC  has  a  strong  influence  on  the effective component values.

To  reduce  the  parasitic  inductance,  use  a  solid  ground or  power  plane  below  the  signal  traces. Also,  use  lowinductance connections to ground on all GND pins, and place decoupling capacitors close to all VDD connections.

## Table 2. Jumper Function Table

| JUMPER   | STATE   | FUNCTION                  |
|----------|---------|---------------------------|
| JU1      | 1-2*    | 3.3V Operation            |
| JU1      | 2-3     | 5V Operation              |
| JU2      | 1-2     | Device enabled            |
| JU2      | 2-3     | Device asleep             |
| J2       | NC*     | Enable controlled by FTHR |
| JU5      | 1-2 *   | FTHR powered              |
| JU5      | 2-3     | PMOD powered              |
| JU5      | NC      | External power supply     |

## Power Supply

The  MAX7032  can  operate  from  3.3V  or  5V  supplies. For 3.3V operation, connect jumper J1 from 1-2 with JU5 jumper at 1-2.  Or, if providing the supply externally, leave JU5 open and connect 3.3V on VDD3 test point with J1 from 1-2. For 5V operation, connect jumper J1 from 2-3 with JU5 left open.  Or, if providing supply externally, leave JU5 open and connect 4.5V - 5.5V on VHI test points.

## Test Points and I/O Connections

Additional test points and I/O connectors are provided to monitor  the  various  baseband  signals  and  for  external connections. See Table 3 and Table 4 for a description.

## Table 3. Test Points

| TEST POINT   | DESCRIPTION            |
|--------------|------------------------|
| DATA         | DATA pin               |
| RSSI         | RSSI pin               |
| CLK          | CLKOUT pin             |
| VDD3         | DVDD, AVDD, PAVDD pins |
| VHI          | HVIN pin               |
| GND          | GND                    |

## Table 4. I/O Connectors

| SIGNAL   | DESCRIPTION             |
|----------|-------------------------|
| RFIN     | RF input/output         |
| H1/H2    | FTHR connections        |
| JU4      | Optional PMOD connector |

## Evaluates: MAX7032

## Detailed Description of Software

The MAX7032  EV  kit controller GUI software is designed to control the MAX7032 EV kit board and the MAX32630FTHR  board.  The  software  includes  USB controls, which provide SPI and power to the MAX7032 through the FTHR board interface.

## Comport

The Comport section  provides  a  drop-down  list  of serial communication ports available for connection to a MAX7032 EV kit through a FTHR board. When the GUI is  run  after  connecting  the  EV  kit  hardware,  the  dropdown list  should  default  to  the  proper  COM  port.  If  the hardware is connected to the computer after the GUI is started, click on the Refresh button to scan for compatible ports. Once the appropriate COM port is selected in the drop-down list, click on the Connect button (See Figure 19). After  properly  connecting to the COM port with the FTHR board, the GUI displays the revision of FTHR board firmware detected displays a Green 'LED' and displays 'Connected' in the status bar along the bottom of the GUI window (See Figure 20).

## Voltage (2.1V to 3.3V)

The Voltage section  provides  a  user-adjustable  power supply  from  the  FTHR  board  MAX14690N  power  management IC (PMIC) to the MAX7032 EV kit and can be used as the primary VDD supply. The PMIC L3OUT can be set to voltages between 2.1V to 3.3V, and it applies to the level of the logic interface lines as well as the device supply. To program the supply voltage, enter a valid level in the Voltage field and click the Set button. The default Evaluates: MAX7032

value  of  the  L3OUT  voltage  is  3.3V.  When  using  the FTHR board interface to supply the MAX7032 EV kit with power,  make  sure  to  connect  the  JU5  jumper  between pins 1-2.

An  alternate  option  with  the  MAX7032EVKIT  hardware is  to  provide  5V  to  the  MAX7032  HVIN  pin. To  use  the 5V supply from the FTHR board, connect the J1 jumper between 2-3 before the FTHR USB connection, instead of the default connection of HVIN to DVDD on the MAX7032 EV kit (J1 jumper at 1-2).

## Device Configuration

The Device  Type section  must  be  set  by  the  user  to properly  choose  which  transceiver  is  attached  to  the FTHR board. This selection configures the GUI software to  default  the  interface  through  the  SPI  pins  when  the MAX7032 is selected. The Power Status allows enabling or disabling the device through the ENABLE pin  on  the MAX7032.  Click the TURN ON to enable the device.  To disable the device, click the TURN OFF button, as shown in Figure 21.

There is also a register control that can put the MAX7032 into  a  sleep  mode  through  the  Control  Register  at address 0x01. To activate  this  control,  click  the SLEEP toggle  switch,  as  shown  in  Figure  22  in  the Device Configuration section.  This  will  put  the  device  into  a deep sleep mode, regardless of the ENABLE pin.

## MAX7032

The  MAX7032  section  allows  GUI  configuration  of  the device through multiple toggle switches, buttons, and text box entries. These controls can be seen in Figure 23.

Figure 19. COM Port Assignment

<!-- image -->

Figure 20.  FTHR Status

<!-- image -->

Evaluates: MAX7032

<!-- image -->

Figure 21. Power States to Power On (a) and Power Off (b)

Figure 22.  Device Configuration

<!-- image -->

Figure 23. MAX7032 Control Section

<!-- image -->

## MAX7032 Evaluation Kit

## Register Configuration

The  GUI  allows  simple  configuration  options  for  easy bring-up. These options can be seen in Figure 24.

There  is  a Quick Start  TX function  that  loads  the  programming of the  MAX7032 to  support  an ASK  transmit function. This assumes the default populated crystal oscillator of 17.63416MHz, Center Frequency of 433.92MHz, and a Manchester encoded data message of 0xAA to be sent continuously to the DATA pin of the MAX7032. The PA control bit will be enabled with this configuration and will result in an active signal output. This setup will result in  a  modulated ASK  output  at  approximately  +6dBm  in output power.

There is also a Quick Start RX function that will load the programming for an ASK receive function. This configuration  will  place  the  device  into  an  active  receive  state. Provided a modulated ASK signal on the RFIN SMA pin, the  received  signal  will  be  output  on  the  DATA  pin  and can be viewed on an oscilloscope or using the Time Plot button as described in the Time Plot section.

To capture the current configuration of the MAX7032 registers,  click  the Save Config .  The results of the current settings will be captured into an XML file that can be used later to duplicate the device setup.

Similarly,  there  is  a Load  Config button  that  loads  an XML file into the registers of the MAX7032.

## TRX Control

The TRX Control section, as shown in Figure 25, allows the control and status of the current transmit or receive state. This state can be controlled through the T/ R pin or

## Evaluates: MAX7032

the  Configuration  0  Register  control  at  address  0x02.  If the register control is set to enable the transmit mode, the pin control associated with TRX Pin toggle switch will not have any impact. The Read button provides the current TRX State status to indicate the transmit or receive state.

## Modulation, Frequencies, Pin Control, and Timers

The Modulation is  controlled  with  a  simple  pulldown  to select either ASK or FSK modulation of the signal. When changing to FSK modulation, a warning pop-up window might appear to enter a Frequency Deviation value.

The oscillator frequency should be set to the board crystal value by entering the value and clicking the Set button, as shown in Figure 26. The default value is 17.63416MHz for the 433.92MHz operating frequency.

For  the  transmit  function,  the  other  frequencies  of  the system  must  be  entered  to  ensure  the  system  is  programmed as expected. The Center Frequency should be programmed to the desired output. If the modulation is set to FSK, the programmed frequencies are calculated given the Center Frequency and FSK Deviation set.

Many of the registers  within  the  MAX7032  can  be  controlled via toggle switches, as shown in Figure 27. See the device data sheet for the individual definition of each bit.

There is a section of settings that control the timers in the MAX7032.  Some  of  these  are  only  applicable  when  in the DRX receiver mode.  These timers will be greyed out unless the DRX bit is enabled.

Figure 24. Register Configuration Section

<!-- image -->

Figure 25. TRX Control

<!-- image -->

## MAX7032 Evaluation Kit

## Time Plot

The Time Plot button,  shown in Figure 28, opens up a window, which allows the user to visually see the DATA pin  displayed  in  a  plot.  This  plot  works  best  at  around the 10kbps rate and lower for proper oversampling of the received signal. The StartRF button should be clicked to begin the display, as shown in Figure 29. After it is running,  the StopRF can  be  clicked  to  stop  the  sampling.

Figure 26. Setting of Modulation and Frequencies

<!-- image -->

Figure 27.  Register Bit Controls

<!-- image -->

## Evaluates: MAX7032

Clicking the Clear Plot button clears the current display. To zoom in or out of the display samples, use the mouse scroll.

## RSSI Read

With the RSSIO enabled, the level of the RSSI pin, as sampled by the FTHR board, can be read by clicking the Read button in the RSSI Read section, as seen in Figure 30.

<!-- image -->

Figure 28. Time Plot Button

Figure 29. Time Plot Window

<!-- image -->

Figure 30. RSSI Read

<!-- image -->

## MAX7032 Evaluation Kit

## TX Data Control

The PA bit  in  the  Power-Configuration  Register  within the MAX7032 enables the output when in transmit mode. Click the PA toggle switch to enable or disable this signal.

When  the  MAX7032  is  programmed  as  a  transmitter, the message can be sent from the FTHR board. The TX Data Control section, as shown in Figure 31, allows the user  to  manage  the  data  pattern.  The  message  that  is to  be  sent  to  the  MAX7032  DATA  pin  is  defined  by  the Message: entry, with '0xAA 0xAA' being the default data stream. A pattern can be loaded into this field by clicking the Load button  and  selecting  the  desired  file  to  load. The pattern defined within the Message field can also be saved to a file using the Save button. This message can be encoded as Manchester or NRZ data. Manchester is

## Evaluates: MAX7032

the default selection with the Manchester checked, and NRZ  is  selected  when  the Manchester is  unchecked. The data rate of this bitstream is defined by populating the Bitrate (1-33kbps) field, followed by clicking the Set button. To enable a continuous and repeating pattern to the MAX7032, click the Cont checkbox. When the message bitrate  and  selection  of  continuous  or  single  have  been made, the Send Data is clicked to start the stream of data to the DATA pin of the MAX7032.

As shown in Figure 32, a Manchester 2kbps signal could look like a 2kHz square wave to represent all 1's (or all 0's if shifted in phase) in Manchester-encoded data. And an NRZ 4kbps signal could look like a 2kHz square wave to represent alternating 0's and 1's.

Figure 31. TX Data Control

<!-- image -->

Figure 32. Manchester and NRZ Messages

<!-- image -->

## Ordering Information

| PART             | TEMP. RANGE    | IC PACKAGE   |
|------------------|----------------|--------------|
| MAX7032EVKIT-315 | -40ºC to +85ºC | 32-TQFN      |
| MAX7032EVKIT-433 | -40ºC to +85ºC | 32-TQFN      |

## MAX7032 Evaluation Kit

## MAX7032 EV Kit Bill of Materials

| PART                 |   QTY | DESCRIPTION                                                        |
|----------------------|-------|--------------------------------------------------------------------|
| C1, C21, C22, C27    |     4 | 0.01UF 10% 200V X7R CER CAP (0603) KEMET: C0603C103K2RAC           |
| C2                   |     1 | 0.1UF 10% 100V X7R CER CAP (0603) YAGEO: CC0603KRX7R0BB104         |
| C3                   |     1 | 680PF 1% 50V C0G CER CAP (0603) KEMET: C0603C681F5GAC              |
| C4, C25, C28, C29    |     4 | 220PF 5% 50V C0G CER CAP (0603) MURATA: GRM1885C1H221JA01          |
| C5, C7, C8, C17, C18 |     5 | 100PF 5% 50V C0G CER CAP (0603) KEMET: C0603C101J5GAC              |
| C6                   |     1 | 1.8PF ±0.25pF 50V C0G CER CAP (0603) AVX: 06035A1R8CAT2A           |
| C9                   |     1 | 1500PF 10% 50V C0G CER CAP (0603) VENKEL LTD.: C0603C0G500- 152KNP |
| C10-C12              |     3 | 0.047UF 10% 50V X7R CER CAP (0603) KEMET: C0603C473K5RAC           |
| C14, C16             |     2 | 6.8PF ±0.25pF 50V C0G CER CAP (0603) MURATA: GRM39C0G6R8C050       |
| C15                  |     1 | 10PF 5% 50V C0G CER CAP (0603) KEMET: C0603C100J5GAC               |
| C26                  |     1 | 470PF 10% 50V C0G CER CAP (0603) KEMET: C0603C471K5RAC             |
| DATA, VDD3, VHI      |     3 | TEST POINT RED KEYSTONE: 5010                                      |
| TP1, TP2             |     2 | TEST POINT BLACK KEYSTONE: 5011                                    |

Evaluates: MAX7032

| PART        |   QTY | DESCRIPTION                                                   |
|-------------|-------|---------------------------------------------------------------|
| H1          |     1 | 16-PIN CONNECTOR SULLINS ELECTRONICS CORP: PRPC016SFAN-RC     |
| H2          |     1 | 12-PIN CONNECTOR SULLINS ELECTRONICS CORP: PRPC012SFAN-RC     |
| J1, J2, JU5 |     3 | 3-PIN CONNECTOR SULLINS ELECTRONICS CORP: PEC03SAAN           |
| JU4         |     1 | 6-PIN CONNECTOR SAMTEC: TSW-106-25-T-S-RA                     |
| RFIN        |     1 | 2-PIN CONNECTOR, END LAUNCH JOHNSON COMPONENTS: 142- 0701-851 |
| L1, L2, L5  |     3 | 22NH 5% (0603) COILCRAFT: 0603CS-22NXJL                       |
| L4          |     1 | 16NH 5% (0603) COILCRAFT: 0603CS-16NXJL                       |
| L6          |     1 | 68NH 5% (0603) COILCRAFT: 0603CS-68NXJL                       |
| R8          |     1 | 0 ohm RESISTOR 5% (0603) SAMSUNG ELECTRONICS: RC1608J000CS    |
| R11         |     1 | 100K ohm RESISTOR 5% (0603) PANASONIC: ERJ-3GEYJ104           |
| R14         |     1 | 0 ohm RESISTOR 1% (0603) YAGEO: RC0603FR-070RL                |
| U1          |     1 | IC MAXIM: MAX7032ATJ+                                         |
| U2          |     1 | BANDPASS 10.7MHz FILTER; 3dB BW=330kHz MURATA: SFECF10M7EA00  |
| Y1          |     1 | CRYSTAL 17.63416MHz ±80PPM NDK: EXS00A-CG07843                |
|             |     1 | PCB MAXIM: MAX7032                                            |

## MAX7032 EV Kit Schematic

<!-- image -->

## MAX7032 EV Kit PCB Layout Diagrams

MAX7032 EV Kit Board Layout-Top Silkscreen

<!-- image -->

Evaluates: MAX7032

MAX7032 EV Kit Board Layout-Top

<!-- image -->

MAX7032 EV Kit Board Layout-Internal2

<!-- image -->

## MAX7032 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX7032 EV Kit Board Layout-Internal3

MAX7032 EV Kit Board Layout-Bottom

<!-- image -->

MAX7032 EV Kit Board Layout-Bottom Silkscreen

<!-- image -->

## Appendix I - Detailed Software, Firmware, and Driver Installation Procedures

## Download the ISM Radios GUI

This software and firmware are available from the Maxim website .

- 1) Log in to your MyMaxim account on the website.
- 2) Click on the magnifying glass and search for the MAX7032 .

<!-- image -->

<!-- image -->

- 3) Click on the DESIGN RESOURCES tab on the appropriate product web page and click on the software link.
- 4) Click the file link on the software landing page to download the ISM Radios GUI msi.

<!-- image -->

<!-- image -->

Evaluates: MAX7032

- 5) Review the Maxim Software License Agreement (SLA), and accept the terms by selecting I AGREE and clicking the Download button.
- 6) Save the EV kit software package to your desktop or other accessible location for later install.

<!-- image -->

## Install the ISM Radios GUI

This software and firmware are available from the Maxim website . See the Download the ISM Radios GUI section for information on obtaining the latest firmware from Maxim.

This process should take less than 10 minutes after downloading the software, firmware, and driver package.

- 1) Double-click the ISMRadiosGUISetup.msi setup file and follow the Setup Wizard prompts.
- a) If a security warning appears, click Run .
- b) In the Welcome window, click Next .

<!-- image -->

<!-- image -->

Evaluates: MAX7032

- c) Use the default Destination Folder , and click Next .
- d) Install the software by clicking Install .

<!-- image -->

<!-- image -->

- e) Click Finish when the setup process is complete.

<!-- image -->

## Program the MAX32630FTHR Board with the MAX7032 Firmware

This software and firmware are available from the Maxim website . See the Download the ISM Radios GUI section for information on obtaining the latest firmware from Maxim.

- 1) Connect the MAX32630FTHR to the MAX32625PICO.
- a)  Use the fine-pitch, 10-pin ribbon cable to connect the boards from the SWD (J3) header on the HDK to J4 on the MAX32630FTHR.

<!-- image -->

Evaluates: MAX7032

- 2) Connect the MAX32630FTHR to a power source.
- a)  Use a USB Micro-B cable to connect the MAX32630FTHR board to a suitable power source (no USB connectivity is required). Alternatively, you can power the board from a charged battery as long as you remember to turn it on by pressing the power/reset button next to the battery connector. The board turns on automatically when powered from the USB supply.
- b)  The status LED on the FTHR board should be lit a steady red.
- 3) Connect the MAX32625PICO to a PC.
- a)  Use a USB Micro-B cable to connect the HDK to a PC (the white USB cable off the right side of the photo).
- b)  The status LED on the DAPLINK board blinks red when connecting.
- c) After a few seconds of activity, the PC recognizes the DAPLINK as a standard USB drive.
- 4) Drag and drop, or save a the ism\_radios\_fw.bin program binary to the mbed or DAPLINK USB drive.

<!-- image -->

<!-- image -->

- a)  The FTHR board LED shuts off and the LED on the MAX32625PICO slowly flashes red as the FTHR board is being programmed.
- b)  Once the programming is complete, the DAPLINK USB drive disconnects from the PC and reconnects as a USB drive again.
- c) If the programming was successful, the contents of the DAPLINK USB drive should include a DETAILS.TXT file. If an ERROR.TXT file exists on the drive, check that the FTHR board had power during the programming process and repeat steps 3 and 4.
- 5) To prepare the FTHR board for use, disconnect the DAPLINK board (ribbon cable) and press the Reset button on the FTHR board or disconnect the FTHR board from the USB power supply.
- a)  When the Reset button is pressed, the microcontroller restarts and the newly programmed application begins to run, or you can disconnect and reconnect the USB cable if using a PC for power.

The latest information and these firmware update instructions can be found on the MAX32630FTHR board mBed web site or by visiting the mBed home page and searching for 'MAX32630FTHR'.

If you do not have an mbed account, choose Sign up and create your mbed account. Otherwise, log in with your normal username and password. This gives you access to the website, tools, libraries, and documentation.

You must load the matching HDK image ( MAX32630FTHR DAPLINL image ) for the platform you are programming in order for drag-and-drop programming to work.

## Board Driver

The required driver is available from the Maxim website . See the Download the ISM Radios GUI section in this documentationfor information on obtaining the latest driver from Maxim.

- 1) Connect the MAX32630FTHR to the PC's USB port.
- 2) In Device Manager , right-click Other devices &gt; CDC Device or mbed Composite Device .

<!-- image -->

- 3) Click Update Driver Software , then select Browse my computer for driver software.
- 4) Select Let me pick from a list of available drivers on my computer , and click Next .

<!-- image -->

<!-- image -->

- 5) On a Windows 10 operating system, click the Have Disk… button.
- 6) Browse to the path of the driver folder and click OK .

<!-- image -->

<!-- image -->

- 7) Select the device driver and click Next .
- 8) Ignore the warnings and click Install this driver software anyway .

<!-- image -->

<!-- image -->

Evaluates: MAX7032

## Appendix II - Hardware Modifications

## PMOD Header Interface

The MAX7032 EV kit provides a PMOD-compatible header footprint, which provides yet another built-in interface to the transmitter. The JU4 connector can be populated with a 6-pin, 100mil, right-angle header such as a SAMTEC TSW-10625-T-S-RA, allowing direct connections to the CSB, DIO, SCLK, ground, and VDD lines.

The PMOD interface can be used in combination with the Maxim MAX32600MBED kit and the MAXREFDES72# Arduino Uno R3-to-PMOD shield adaptor. When using the PMOD interface to supply the MAX7032 EV kit with power, be sure to connect the JU1 jumper between pins 2-3.

<!-- image -->

## Appendix III - Pinout Sheets MAX7032 EV Kit

FTHR Board Connectors

## Peripheral Module Connector

<!-- image -->

## MAX32630FTHR

Arm Cortex-M4 processor with FPU microcontroller rapid development platform.

<!-- image -->

## MAX7032 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                               | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/18            | Initial release                                                                                           | -               |
|                 1 | 4/18            | Updated Ordering Information table                                                                        | 11              |
|                 2 | 1/21            | Updated the EV kit throughout to match the new HW and SW, added Appendix I, Appendix II, and Appendix III | 1-37            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX7032