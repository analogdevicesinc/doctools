<!-- lastmod 2024-06-28 -->
<!-- image -->

Evaluates: MAX30009

## General Description

The MAX30009EVKIT# evaluation kit (EV kit) provides a platform to evaluate the functionality and features of the MAX30009 Low-Power, High-Performance Bioimpedance (BioZ)  Analog  Front  End.  The  EV  kit  allows  for  flex -ible  hardware  and  software  configurations  to  help  the user  quickly  learn  how  to  configure  and  optimize  the MAX30009 for their applications.

The  MAX30009  is  a  complete  Bioimpedance  (BioZ) analog  front-end  solution  for  wearable  applications.  It offers  high  performance  for  fitness,  wellness,  and  clini -cal applications and ultra-low power for long battery life. The BioZ receive channel has ESD protection, EMI filter -ing, internal lead biasing, DC leads off detection, DRVN lead-off detection, and ultra-low power lead-on detection during standby mode. The BioZ receive channel also has high input impedance, low noise, high CMRR, program -mable gain, various low-pass, and high-pass filter options, and  two  high-resolution  analog  to  digital  converters  for simultaneous I and Q acquisition.

The  MAX30009EVKIT#  EV  kit  consists  of  two  boards. MAXSENSORBLE\_EVKIT\_B is the microcontroller (MCU) board  while  MAX30009\_EVKIT\_B  is  the  sensor  board containing  the  MAX30009. The  EV  kit  is  powered  by  a LiPo battery, which is recharged through a USB-C cable. The EV Sys communicates with MAX30009GUI (should be installed in the user system) via Bluetooth (WIN BLE). The EV kit contains the latest  firmware  but  comes  with the programming circuit board MAXDAP-TYPE-C in case a firmware change is needed.

Ordering Information appears at end of data sheet.

Click here to ask an associate for production status of specific part numbers.

## MAX30009EVKIT# Evaluation Kit

## Benefits and Features

- Convenient Platform to Evaluate the MAX30009
- Many Easy-to-Reach Test Points
- Real-time Monitoring and Plotting
- Data Logging Capabilities
- Bluetooth ®  LE
- Windows ® 10 Compatible GUI software

## EV Kit Contents

- MAX30009\_EVKIT\_B sensor board
- MAXSENSORBLE\_EVKIT\_B microcontroller board (assembled to MAX30009\_EVKIT\_B)
- 105mAh LiPo battery LP-401230 (assembled to MAXSENSORBLE\_EVKIT\_B)
- USB-C to USB-A cable
- MAXDAP-TYPE-C programmer board
- Micro USB-B to USB-A cable
- Six electrode cables

## MAX30009EVKIT# EV Kit Files

| FILE                         | DESCRIPTION                          |
|------------------------------|--------------------------------------|
| MAX30009GUISetupVxxx_Web.zip | Setup file to install PC GUI program |
| MAXSENSORBLE_EVKIT_B.zip     | Schematic, BOM, layout               |
| MAX30009_EVKIT_B.zip         | Schematic, BOM, layout               |

## Note:

1. The GUI setup files can be obtained by the procedure described in the Quick Start section
2. MAXSENSORBLE\_EVKIT and EVKIT design files are attached at the end of this document.

Windows is a registered trademark and registered service mark of Microsoft Corporation. Bluetooth word mark and logos are registered trademarks owned by Bluetooth SIG, Inc.

## MAX30009EVKIT# Evaluation Kit

## MAX30009EVKIT# Board Photo

<!-- image -->

## Quick Start

## Required Equipment

- MAX30009EVKIT# EV kit
- USB-C to USB-A cable
- Windows System with a USB port and Bluetooth support (WIN BLE)
- 105 mAh Li-Po battery LP-401230
- Microsoft .NET framework 4.7.2 or above

## Procedure

The EV kit is fully assembled and tested. Use the follow -ing steps to verify board operation:

Note: In the following sections, text in bold refers to items and buttons in the MAX30009EVKitGui.exe GUI program.

- 1) Confirm that the MAXSENSORBLE\_EVKIT\_B microcontroller  (MCU)  board  is  connected  to  the MAX30009\_EVKIT\_B board through the flex cable as shown in Figure 1.
- 2) Set the EV kit on a nonconductive surface to ensure that nothing is on the PCB shorts.
- 3) Visit https://www.analog.com/en/resources/evalu -ation-hardware-and-software/evaluation-boardskits/max30009evkit.html to download the most recent version of the EV kit software, MAX30009GUI-SetupVxxx\_Web.zip .  Save the EV kit software to a temporary folder and uncompress the zip file. The EV kit  software  can  also  be  accessed  by  scanning  the QR code on the EV kit board.
- 4) Launch the MAX30009GUISetupVxxx.exe and follow the instructions from the pop-up windows. This will install the MAX30009EVKitGui.exe GUI program to the user's system successfully.
- 5) Press and hold the power switch (SW) for 1 second to  turn  on  the  EV  kit  (see  power  switch  location  in Figure 1). When powered on, the green status LED indicator will toggle.

│

Evaluates: MAX30009

## MAX30009EVKIT# Evaluation Kit

- 6) Launch  the  MAX30009EVKitGui.exe  GUI  program. A Connect  To  Device window  should  appear.  You will see WIN BLE appear on the port, if multiple connections appear then select WIN BLE .  The EV Sys device should appear under Select a device below . Choose the device and press Connect .  The GUI is then launched.

Evaluates: MAX30009

- 7) Configure GUI settings if needed. Note that the elec -trodes  are  not  provided  in  this  EV  kit  and  must  be obtained elsewhere to properly measure BioZ signals.
- 8) Click  the Start button  on  the  bottom  right  to  start data acquisition. When running, the plots on the GUI should stream with data. Figure 2 shows an example of a plot with both I and Q BioZ enabled.

Figure 1. Power Switch for the MAX30009EVKIT# EV Kit

<!-- image -->

Figure 2. Plot of BioZ I and Q Signals

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

## Detailed Description of Software

The  EV  kit  allows  BioZ  data  to  be  sampled  and  transferred to the GUI for both dynamic viewing and logging for later  analysis. The  EV  kit  microcontroller  PCB  performs SPI to Bluetooth ®  LE (BLE) communication, transporting the data to the PC through BLE. Most functionality of the MAX30009 has been mapped to the GUI so that the user can explore a wide variety of applications supported by the  MAX30009.  The  following  sections  describe  these functionalities.

Conventions for registers are:

- Hexadecimal notation for addresses: The PLL\_ Configuration\_1 register is at hex address 0x17.
- Individual bits within register: The PLL\_EN bit is located at 0x17.0 (bit 0 at address 0x17).
- Bit fields within register: The KDIV[3:0] field is located at 0x17[4:1] (bits 4 to 1 correspond to bits 3 to 0 of the KDIV field).

## Software Startup

To begin Bluetooth ®  connection of the EV kit to the PC, ensure  that  Bluetooth  is  enabled  on  the  PC  so  that  it can  detect  the  EV  kit  for  pairing.  Now  turn  on  the  EV kit.  Start  up  the  MAX30009EVKitGui.exe  GUI  program, which prompts a Connect To Device window, as shown in Figure 3 . In this window, click on the COM port that cor -responds with the WIN BLE and the EV kit device should appear under Select a device below . Choose the EV kit and press Connect . The GUI will then be launched.

When  launched,  the  software  first  initializes  the  EV  kit to  communicate.  The  software  then  reads  the  EV  kit registers  and  updates  all  the  associated  control  fields displayed on the GUI. The status strip at the bottom of the GUI displays the firmware version, GUI version, and the hardware's associated COM port.

## Toolstrip Menu Bar

The Toolstrip Menu bar is located at the top of the GUI window (see  Figure  4).  This  bar  contains File , Device ,

Evaluates: MAX30009

Options , Logging , and Help menus, whose functions are detailed in the following sections.

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu provides the ability to connect or disconnect the EV kit to the GUI. If the EV kit is disconnected while the GUI is open, the GUI will display Disconnected in the lower right corner. To connect, turn on the EV kit, navigate to the Device menu, and select Connect . This will  open  the Connect To Device window,  allowing  the user  to  connect.  Once  connection  is  successful,  the bottom right corner of the GUI will read Connected and display the COM port to which the EV kit is connected.

Figure 3. Connect To Device window

<!-- image -->

Figure 4. MAX30009EVKIT# EV Kit Toolstrip Menu Bar

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

## Options Menu

The Options menu provides several settings  to  access more features offered by the GUI.

- Register Import/Export allows the user to save register settings in a Windows CSV file ( Export )  and to quickly set up the GUI based on register settings from a previously exported CSV file ( Import ).
- Plot  Time  Scale allows  the  user  to  select  the  total number of seconds of data they want to see on the plot.
- Advanced provides  the Register  Access selection which reveals more register and system settings in the Registers tab for the user to customize.

## Logging Menu

The Logging menu provides a way to export exact data measured  by  the  EV  kit.  There  are  two  options  available: File to  save data to a Windows CSV file or Flash to  save  data  in  the  EV  kit's  flash  memory.  When  the MAX30009EVKIT# EV kit is plugged in to the PC through the  USB-C  to  USB-A  cable,  the  option Parse  Bin  File parses the binary file  saved  in  the  flash  memory  into  a '.csv' file. See the Data Logging section of this datasheet for more details.

## Help Menu

The Help menu contains GUI information and links that can help with GUI issues.

## Data Acquisition Bar

The Data Acquisition bar is located at the bottom of the GUI window (see Figure 5). This bar displays EV kit status, GUI status, a Start/Stop button, and a Reset button.

Figure 5. MAX30009EVKIT# EV Kit Data Acquisition Bar

<!-- image -->

Evaluates: MAX30009

## EV kit and GUI Status

The status indicators include:

- Part: Reads the Part ID (0xFF) and displays the result.
- FW: Firmware version loaded onto MAXSENSORBLE\_ EVKIT\_B board.
- SW: GUI software version.
- Battery: Shows battery charge level (1 to 10).
- File Log: Enabled or Disabled as set in the Logging menu.
- Flash  Log: Enabled  or  Disabled  as  set  in  in  the Logging menu.
- Connected: Displays 'Connected' (with MAC address and COM port) or 'Disconnected' state of EV kit board.
- RSSI,  Dropped  Count,  and  Tag  Error  Count: Bluetooth ® debug  fields.  RSSI  indicates  Bluetooth ® signal  strength,  which  should  be  above  -70dBm.  If below that level, move the EV kit board closer to the laptop/PC.

## Start/Stop Button

Clicking Start begins data acquisition and visualizes the data in the Plots tab.  During data acquisition, the Start button turns into a Stop button. Click this Stop button to stop data acquisition and data visualization.

## Reset Button

Clicking Reset resets  all  registers  and  GUI  settings  to predefined default values.

│

## MAX30009EVKIT# Evaluation Kit

## PLL Tab

The PLL Tab (see Figure 6) sets up the master clock and the divider ratios for the generation of the various device clocks. The clock values are discussed in the MAX30009 IC  data  sheet,  along  with  tables  containing  values  for easy clock frequency setup.

## PLL Enable

Checkbox is checked if PLL\_EN(0x17b0) = 1, indicating that the PLL is enabled.

## Source Select and Clock Selection

Source Select = Internal : The Clock Selection pull-down box selects the internal oscillator frequency (32.768kHz or 32kHz).

Source  Select  =  External: Clock  source  is  a  low-jitter external  32.867kHz  oscillator  connected  to  the  device FCLK input pin.The Clock Selection field must be set to 32.768kHz.

Evaluates: MAX30009

## Generating PLL Frequency

PLL  frequency  is  generated  by  multiplying  the Clock Selection frequency with M Divider. PLL frequency ranges from 14MHz to 28MHz. At 32kHz, M Divider range is 438 to 875. At 32.768kHz, M Divider range is 427 to 854.

## BioZ Drive: BioZ Synth Clock (K Divider) and Drive Frequency (DAC OSR)

The BioZ  Synth  Clock frequency  must  be  between 4.096kHz and 28MHz. The frequency is set by dividing the  PLL  Frequency  by  the K  Divider value.  The Drive Frequency is  generated  by  dividing  the BioZ  Synth Clock frequency by the DAC OSR value.

## BioZ Receive: BioZ ADC Clock (N Divider) and Sample Rate (ADC OSR)

The BioZ  ADC  Clock frequency  must  be  between 16.0kHz and 36.375kHz . The frequency is set by dividing the PLL Frequency by the N Divider value. The Sample Rate is  generated  by  dividing  the BioZ  ADC  Clock frequency by the ADC OSR value.

Figure 6. MAX30009EVKIT# EV Kit PLL tab

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

## BioZ Drive Tab

The BioZ Drive Tab (see Figure 7 ) configures the stimulus generator.

## BioZ Enable

Enabling BioZ allows bioimpedance data to be acquired and  plotted  in  the Plots tab.  This  field  is  also  available  and  can  be  set  from  the  BioZ  Receive  and  BioZ Calibration tabs.

- Disabled: No samples are captured.
- I-Channel: Enable BioZ measurement from an in-phase component.
- Q-Channel: Enable BioZ measurement from quadrature-phase component.
- I- and Q-Ch: Enable both in-phase and the quadrature BioZ measurement.

Evaluates: MAX30009

## Current DAC Drive Mode

The BioZ drive channel offers several modes of stimulation that can be selected. The BioZ drive has several different options which configure the internal amplifiers and switches to support waveforms for various applications.

- Current: Output stimulus is sine wave current.
- Voltage: Output stimulus is sine wave voltage.
- H-Bridge: Output stimulus is square wave voltage from the H-Bridge source.
- Standby: Low-power state where electrodes are driven to V\_MID\_TX. Standby is useful in saving power during ultra-low power (ULP) lead-on detection.

There  are  several  necessary  connections  to  ensure patient  safety.  When  using  sine  wave  current  as  a stimulus, the Use External Capacitor option  should  be

Figure 7. MAX30009EVKIT# EV Kit BioZ Drive tab

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

selected by default to use a 47nF capacitor provided by the EV kit to block DC currents from being driven into the patient. When using voltage mode or H-bridge mode as a stimulus, there must be external series precision resistors connected in the DRVP and DRVN paths, and the pins EL1 and EL4 should be connected to DRVP and DRVN respectively.  See  the BioZ  Configurations subsection  in the Detailed Description of Hardware section of this datasheet for hardware components provided by the EV kit.

## Voltage Mode Amplitude

Voltage Mode Amplitude can adjust current and voltage amplitudes from the Current DAC. There are four settings, 35.4mV, 70.7mV, 177mV, and 354mV. When Voltage is selected for the Current DAC Drive Mode ,  the Voltage Mode  Amplitude sets  the  voltage  RMS  amplitude  at DRVR. When Current is selected for Current DAC Drive Mode , the Voltage Mode Amplitude, and Current Drive Range Resistor sets the current magnitude and changes the voltage amplitude at DRVR depending on the current drive range resistor used.

Note that certain amplitudes are not available for certain stimulus frequencies to align with safety standards. Refer to the MAX30009 IC datasheet under the BioZ Transmit Channel section  for  recommended  settings  and  safety limits.

## Amplifier Settings

The BioZ drive channel contains various amplifier settings to adjust for different BioZ applications. Amplifier Range sets the output stage option for the voltage drive (1st) and current drive (2nd) amplifiers. Higher amplifier ranges are recommended for higher output current loading, although this will consume more power. Amplifier Bandwidth sets the gain bandwidth of the voltage drive and current drive amplifiers.  Higher  bandwidth  is  recommended  for  highfrequency  applications  including  bioimpedance  analysis and impedance cardiography. Low bandwidth is recommended for low-frequency applications including galvanic skin response to reduce power consumption. Refer to the MAX30009 datasheet under the BioZ Transmit Channel section for more details.

## Current Drive Range Resistor

The BioZ drive channel allows for custom current magnitudes to be defined through an internal range resistor. The Current  Drive  Range  Resistor sets  the  value  of this  resistor.  There  are  four  resistor  settings,  552.5kΩ,

## Evaluates: MAX30009

100.5kΩ, 5.525kΩ, and 276.25Ω. When Current is selected  for Current  DAC  Drive  Mode ,  the  V oltage  Mode Amplitude and Current Drive Range Resistor sets the current  magnitude.  Refer  to  the MAX30009  datasheet under the BioZ Transmit Channel section for more details.

## External Resistor

The BioZ drive channel allows for custom current magnitudes  to  also  be  defined  through  an  external  resistor in  place  of  the  internal  range  resistors.  Selecting Use External Resistor selects  the  external  resistor  inserted between DRVXR and DRVXC pins to be used in place of the internal range resistors. In this case, Current Drive Range Resistor is ignored. R13 on the EV kit is the exter -nal resistor in a standard 0402 SMT package size. This resistor is not populated on the EV kit to allow the user to  populate their own external resistor value. When this option is selected, the resistor value should be entered (in Ω) and the Set button should be pressed. This will calculate and display the RMS drive current under the Current Drive Range Resistor pull-down box.

## External Capacitor

When sine wave current is used for stimulation, an exter -nal  capacitor  must  be  inserted  between  DRVXC  and DRVSJ  to  couple AC  stimulus  current  and  prevent  DC from passing into the patient. Deselecting Use External Capacitor bypasses this external capacitor.

## DC Restore

The BioZ drive channel contains a 10MΩ feedback resis -tance to the current drive amplifier to maintain DC bias of the  drive  electrodes  during  a  lead-off  event  and  reduce amplifier  settling  time  when  the  lead  is  reconnected. Enabling DC Restore applies  this  feedback  resistance, and is required when AC-coupling capacitors are included in  the  stimulus  path  (E1\_C  and/or  E4\_C  jumpers  are open).

## Current DAC Frequency Selection

The  BioZ  drive  frequency  is  generated  by  dividing  the output of the PLL by K Divider and DAC OSR . Changing these fields also changes their values in the PLL tab .

## Advanced Settings: Enable Drive Out of Range (OOR) Detection

This  checkbox  is  identical  to  the DRVN Out of Range Enable checkbox on the BioZ Mux tab. See the descrip -tion in the BioZ Mux tab section of this document.

## MAX30009EVKIT# Evaluation Kit

## BioZ Receive Tab

The BioZ  Receive  Tab (see  Figure  8)  configures  the receive channel.

## BioZ Mux

This block shows the location of the BioZ Mux and pro -vides a link to directly open the BioZ Mux tab.

## BioZ Enable

Enabling BioZ allows bioimpedance data to be acquired and plotted in  the Plots tab.  This  field  is  also  available and can be set from the BioZ Drive and BioZ Calibration tabs. See the description for this field in the BioZ Drive Tab .

Evaluates: MAX30009

## External HPF Capacitor

External capacitors can be connected at the BIP and BIN inputs  for  high-pass  filtering.  Enter  the  value  of  these capacitors in the External HPF Capacitor box and click Update HPF to update. This value is required to calculate the  allowable  corner  frequencies  for Analog  HPF .  The EV kit board has 47nF external HPF capacitors installed, but  the  user  has  the  option  of  changing  the  capacitors to other values and updating this field in the GUI. These external  capacitors  are  enabled  by  opening  the  E2B\_C and E3B\_C jumpers.

Figure 8. MAX30009EVKIT# EV Kit BioZ Receive Tab

<!-- image -->

## MAX30009EVKIT# Evaluation Kit

## Analog HPF

The BioZ receive channel contains an analog HPF with two  filtering  options.  First,  the  MAX30009  has  an  internal HPF, with corner frequencies ranging from 100Hz to 10000Hz. Second, the internal HPF can use the external HPF  capacitor  in  replacement  of  its  internal  capacitor. The allowable corner frequencies are automatically calculated based on the External HPF Capacitor . The analog HPF can be disabled by selecting Bypass .  Refer to the MAX30009 datasheet under  the  BioZ  Receive  Channel section for more details.

## INA Mode

The BioZ receive channel contains a variable gain instrumentation  amplifier  (INA)  with  two  modes  of  operation. Select Low-Power for INA Mode to  reduce  power consumption, though this will result in lower SNR.

## Demodulation Phase Select

The BioZ receive channel contains custom configurations for demodulation. I-Ch. Phase Select and Q-Ch . P hase Select allows  the  demodulation  clocks  to  be  shifted  by 90°  with  respect  to  their  normal  phases.  This  is  useful for  calibration  procedures  and  evaluating  channel  gain matching.  Selecting Demodulation  Disable disables demodulation and allows direct conversion of the differential input voltage across BIP and BIN.

## Gain

The  BioZ  receive  channel  gain  is  set  by  the  combined gains of INA and PGA. There are four gain settings 1V/V, 2V/V, 5V/V, and 10V/V.

## Digital Filters

The BioZ receive channel offers digital high pass filtering and low pass filtering. The cutoff frequencies for these filters are automatically calculated based on the BioZ ADC sample rate.

## Sample Rate Selection

The  BioZ  receive  channel  sample  rate  is  generated  by dividing  the  output  of  the  PLL  by N  Divider and ADC OSR . These values can also be set in the PLL tab.

## AC Lead Off

The MAX30009 BioZ channel can perform AC Lead-Off detection by comparing the BioZ ADC output to the Low Threshold and High  Threshold .  If  the  output  remains over the High Threshold or  under  the Low Threshold for over 128ms, the BIOZ\_OVER or BIOZ\_UNDER status bit is asserted.

## Advanced Settings

Selecting Internal  Parasitic  Cancellation  Enable or External Parasitic  Cancellation  Enable helps  mitigate the  effects  of  parasitic  capacitances  to  ensure  phase accuracy  in  the  BioZ  measurement.  Internal  Parasitic Cancellation  enables  internal  negative  capacitances  on BIP  and  BIN  to  cancel  the  MAX30009's  inherent  input capacitance.  External  Parasitic  Cancellation  enables internal guard buffers to output guard signals at pins EL2A and EL3A, which are connected to guard traces on the MAX30009EVKIT#  EV  kit  board  that  surround  the  BIP and BIN nets to mitigate the effect of parasitic capacitanc -es. Refer to the MAX30009 datasheet for more details.

## Evaluates: MAX30009

## MAX30009EVKIT# Evaluation Kit

## BioZ Mux Tab

The BioZ  Mux  Tab (See  Figure  9 )  configures  the  mux that assigns pins to DRVP , BIP , BIN , and DRVN to support various BioZ applications.

## Wiring of MAX30009EVKIT# EV Kit Board

The MAX30009EVKIT# EV Kit board dedicates pins EL2A and EL3A as circuit guards for pins EL2B and EL3B so EL2A and EL3A cannot be selected by the mux for elec -trode  connections.  In  Tetrapolar  electrode  applications, pins EL2B and EL3B should be connected to BIP and BIN in  the mux so that the External Parasitic Cancellation Enable in the BioZ Receive tab functions correctly.

## Mux Enable

Enabling  the  mux  connects  electrode  pins  as  selected by DRVP Assign , BIP Assign , BIN Assign ,  and DRVN Assign . Disabling the mux disconnects all electrode and calibration pins.

Evaluates: MAX30009

## DRVN Out of Range Enable

The MAX30009 BioZ channel can perform DRVN lead-off detection by monitoring the voltage of DRVN and trigger -ing the BIOZ\_DRV\_OOR status bit when either the DRVP or DRVN lead is disconnected. This is useful when using a tetrapolar electrode configuration. Selecting DRVN Out of Range Enable enables DRVN lead-off detection. This function can also be enabled in the Advanced Settings: Enable  Drive  Our  of  Range  (OOR)  Detection of  the BioZ  Drive tab. DRVN  Out  of  Range  Enable is  also useful to detect if the Current magnitude selected in the BioZ Drive tab is too large for the combined impedance of the DRVP and DRVN electrode-tissue interfaces and the body impedance.

## Lead Bias

Lead-biasing  drives  the  electrodes  within the input common-mode  voltage  requirements  of  the  BioZ  channel. It  is  recommended to enable both the BIP and BIN Resistive Bias for tetrapolar measurements when any of the Ex\_C jumpers are open.

Figure 9. MAX30009EVKIT# EV Kit BioZ Mux Tab

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

## DC Lead-Off Detect

The  MAX30009  BioZ  channel  can  perform  DC  lead-off detection by injecting DC current and comparing the differential voltage across BIP and BIN to the voltage thresh -olds selected in the Threshold . The DC source and sink currents are defined in the settings Current Magnitude and Current  Polarity .  The  External  DC  Lead  Off  func -tion  is  not  supported  by  the  MAX30009EVKIT#  EV  kit board wiring. Refer to the M AX30009 datasheet under the Leads Off Detection section for more details.

## BioZ Calibration Tab

The BioZ Calibration Tab is shown in Figure 10.

The MAX30009 BioZ channel can be calibrated to ensure accurate impedance measurements. For proper calibration, gain and phase errors need to be calculated for each stimulus frequency. Refer to the MAX30009 IC datasheet under the BioZ Calibration section for a full description of the calibration procedure and equations to calculate gain and phase errors.

## Evaluates: MAX30009

The calibration procedure uses either internal programmable resistors or an external calibration resistor connected at the calibration pins or at the electrode pins. The resistor options are selected in the Calibration Resistor box. Only one option (external or internal) should be selected.

For internal calibration, the MAX30009 provides two internal programmable resistors: BioZ test resistors and GSR test resistors. When these internal resistors are used the Mux Enable in the BioZ Mux tab should be deselected to avoid external interference, and only one internal resistor type (BioZ or GSR) should be selected.

The BioZ test resistors are a selection of low impedance resistors  meant  for  BIA/BIS  applications.  These  resistors  have nominal values, but due to tolerance errors a measurement is performed during the device test and the resistor error correction value is stored as the BIST\_R\_ ERR in register 0x44. The GUI uses this value to calculate and  display  the Actual  Resistance  (Error  Corrected) value for use in calibration calculations.

Figure 10. MAX30009EVKIT# EV Kit BioZ Calibration Tab

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

The GSR test resistors are a selection of four high imped -ance resistors meant for GSR/EDA applications.

For  external  calibration,  a  calibration  resistor  must  be connected either to the CALx pins or to the ELx electrode outputs.  The  resistor  value  must  be  entered  into  the External Resistor Value box and the Set button must be pressed to update the value.

To use the CALx pins, select External Resistor on CALX pins ,  which  connects  CAL1  pin  to  DRVP,  CAL2  pin  to BIP,  CAL3  pin  to  BIN,  and  CAL4  pin  to  DRVN  through the  BioZ  Mux.  The CALx pins  are  brought  out  to  the CALIBRATION PORT (connector J10) which can be con -nected  to  the  calibration  resistor.  Pins  CAL1  and  CAL2 should be connected to one side of the resistor with CAL3 and  CAL4  connected  to  the  other  side  of  the  resistor. The Connect ELx Pins during CALx Calibration checkbox  provides  the  option  of  connecting  the  ELx  pins  in addition to the CALx pins through the BioZ Mux, which is designed to add the ELx parasitic effects during the CALx calibration.

An external resistor can also be connected between the pins of the electrodes. Select External Resistor on BIOZ\_ ELx Pins and  connect  the  resistor  between  the  DRVP/ BIP and DRVN/BIN pins.

The One-Shot  Measure button  can  be  used  to  get  a quick measurement of voltage and impedance using the settings  defined  in  BioZ  Drive,  BioZ  Receive,  and  BioZ Mux without having to start data acquisition and having to view measurements in the Plots tab . This is useful for calibration.

The Frequency Calibration box contains the functions to set up the calibration frequencies.

- Import: Loads  frequency  calibration  CSV  file  previously saved by Export function.
- Export: Saves  the  frequency  calibration  setup  to  a CSV file for future use.
- Add: Reads the settings from the PLL tab and adds an  entry  to  the  calibration  frequency  selection  table with a specific drive frequency and sample rate.
- Load: After the user selects a specific frequency calibration setting line, Load programs the PLL registers based on the Drive Freq and ADC SR values in the line.
- Remove: Removes a line in the calibration frequency selection table. To select a line, click on any field of that specific line in the calibration frequency selection table.
- Remove All: Clears the calibration frequency selection table.
- Settling  Points: Number of  samples  that  are  taken but  not  used,  to  allow  the  impedance  measurement to settle.
- Average  Points: Number  of  impedance  samples averaged to derive calibration values.
- Calibrate: Performs the calibration at each frequency, calculates the coefficients, and offsets and populates those fields with the calculated values.
- Enable Software Sweep Mode Operation (Q vs. I Plot): This  mode  performs  an  automated  measurement sweep at the frequencies defined in the  table. The  measurement  timing  is  defined  by  the Settling Points and Average Points .  Calibration is automatically applied to the measurements, and the calibrated data  is  displayed  on  the Bioz  (Q  vs.  I) plot  on  the Plots tab.
- Apply Calibration to BioZ vs. Time Plot: Selecting this  option  applies  the  calibration  at  the  loaded  frequency to the BioZ , BioZ (Mag/Ph) , and Combination plots  in  the Plots tab.  This  is  useful  to  observe calibrated time-domain signals.

## Evaluates: MAX30009

## MAX30009EVKIT# Evaluation Kit

## Plots Tab

The Plots Tab is shown in Figure 11.

The Plots tab plots  the  enabled BioZ measurements in various formats.

- BioZ: Displays  the  I-Channel  and  Q-Channel  measurements versus time.
- BioZ  (Mag/Ph): Displays  the  calculated  magnitude and  phase  versus  time.  Magnitude  is  calculated  as , and Phase is calculated as ATAN(Q/I).
- BioZ  (Q  vs.  I): Displays  frequency  sweep  data  in

Evaluates: MAX30009

the form of a Cole-Cole plot. This plot is enabled by selecting Enable Software Sweep Mode Operation (Q vs. I Plot) on the BioZ Calibration tab and should only be used after performing a calibration at multiple frequencies.

- Combination: Displays  two  selectable  values  from the BioZ and BioZ (Mag/Ph) plots vs. time .

Select Plot Time Scale under Options in the Toolstrip Menu Bar to change the time scale. Calibration may be applied to time-domain plots by selecting Apply Calibration to BioZ vs. Time Plot in the BioZ Calibration tab.

Figure 11. MAX30009EVKIT# EV Kit Plots Tab

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

## Registers Tab

The Registers Tab is shown in Figure 12.

The Registers tab allows the user to read and write registers. Register bits in bold text = 1, while register bits in regular text = 0. Click R to read register or Read All at the top right to read all registers.

To  write  a  register  bit: Click  the  specific  bit  to  set  or clear, then click the W button next to the register to write the entire register to the device on the EV kit.

To write a hex value to a register: Type the value into the test box to the right of the register then click the W button  to  write  the  entire  register  to  the  device  on  the EV kit.

If you do not click W then the bit value will not be written.

Note: The  GUI  interface,  besides  the Register tab, reflects  commonly  used  register  values  and  does  not reflect  all  possible  register  values.  Take  caution  when

Evaluates: MAX30009

customizing register values in the Registers tab, as they may not be reflected in the GUI interface.

## Data Logging

The Data  logging section  explains  how  to  save  data. Data can be saved directly to the PC in a '.csv' file or in the MAX30009EVKIT# EV kit flash memory.

## Setup

To directly save data to the PC, select File data logging in the Logging Menu . The GUI then asks for a folder loca -tion  where  the  '.csv'  file  will  be  saved.  Logging  begins when Start is  clicked  and  ends  when Stop is  clicked. This creates a '.csv' file in the defined folder location and saves data to the file.

To  save  data  in  the  flash  memory,  select  Flash  logging in  the Logging  Menu .  The  EV  kit  first  clears  existing flash memory and then logs raw sensor data to the inte -grated  32MB  flash  memory  chip  in  a  binary  file  format.

Figure 12. MAX30009EVKIT# EV Kit Registers tab

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

The EV kit can be disconnected and powered by the Li-Po battery  during  flash  logging,  allowing  for  remote  opera -tion. Note that clearing the existing flash memory can take up to 30 seconds after Flash is selected. A flashing yellow status LED indicates that flash logging has begun. If flash memory fills or battery power drops too low, flash logging will automatically stop, and the file will close.

The  file  must  be  downloaded  as  it  will  be  erased  from flash  memory  on  the  next  log  request.  If  a  log  has completed,  a  binary  file  will  be  found  on  the  EV  kit. To  download  the  binary  file,  connect  the  EV  kit  to  the

## Evaluates: MAX30009

PC  using  the  USB-C  to  USB-A  cable.  Open  Windows Explorer,  locate  the  ' MAXIM  MSD  X '  mass  storage device, and copy the binary file from the EVKIT onto the PC. Select the Parse Bin File in the Logging Menu to open the Parser Configuration Window and parse the binary file into a '.csv' file, as shown in Figure 13 . Once completed,  the Parser Completed Messaged Window will appear, as shown in Figure 14.

Note: The  max  duration  for  flash  logging  is  depen -dent  on  the  BioZ  sample  rate  and  number  of  enabled channels.

Figure 13. Parser Configuration window

<!-- image -->

Figure 14. Parser Completed Message Window

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

## Output File Format

The  Output  File  Format  describes  the  output  '.csv'  file format for BioZ measurements. Rows 1-4 contain register values.  Row  5  contains  the  start  time  in  milliseconds. Row 6 is a column header denoting the timestamp in mil -liseconds,  sample  number,  BIOZI,  BIOZQ,  temperature, RTC, statusCache1, statusCache0, sensor, regAddr, val, and I2Caddr. The rows below contain rows of data corresponding to the column headers. Finally, the rows below the rows of data show stop time, elapsed capture time, and missed packet count. See Figure 15 for an example.

## Detailed Description of Hardware

## Status LED Indicators

The  following  tri-color  LEDs  on  the  MAXSENSORBLE\_ EVKIT\_B are used as status indicators. See Figure 16.

Evaluates: MAX30009

## Green/Red Status LED: Green

Toggling (1Hz 50% duty cycle) = BLE is advertising

Toggling (1Hz 10% duty cycle) = BLE is connected

## Green/Red Status LED: Red

USB-C cable is connected to charger On = charging

Off = charge complete

## Flash Logging LED

On = busy preparing the flash memory or flash memory is full

Toggling (synchronously with the green LED) = logging Off = not logging

Note: The flash logging indication takes precedence over the charging indication. (i.e., if the EV kit is plugged into a charger, the red LED indicates charge status). If flash logging is enabled while plugged into the charger, the red LED indicates flash log status.

Figure 15. Output .csv file example for BioZ measurements (First few rows)

<!-- image -->

Figure 16. Location of Power Switch, Status LED and Flash Logging LED

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

## Powering the EV kit

To turn on the EV kit, press and hold the power switch (SW) for 1 second until the green LED starts flashing. See Figure 16. When powered on, the green status indicator LED will toggle as described in the Status LED Indicators section of this datasheet. To turn off the EV kit, press and hold the power switch for 3 seconds until the green LED stops flashing. When powered off, the green status indi -cator LED will go out. The red status indicator LED may light  temporarily,  indicating  that  the  flash  log  is  closing. Plugging in the USB-C to USB-A cable will also power up the EV kit. If the EV kit does not turn off after a 3-second hold, press and hold the power switch for 12 seconds to perform a forced shutdown.

Use the USB-C to USB-A cable to charge the integrated single-cell LiPo battery. The integrated PMIC initiates and stops charging automatically. Charge status is indicated through the red status indicator LED and GUI.

## Configuring the Board for Measurement

The  MAX30009EVKIT#  EV  kit  offers  custom  connec -tion  and  component  configurations  to  enable  testing  of MAX30009  functionalities.  The  following  sections  detail these  configurations. Table  1  lists  all  jumpers  and  their respective functions. See the MAX30009EVKIT# EV Kit Schematic Diagram and MAX30009EVKIT# EV Kit PCB Layout Diagrams for more details.

## SPI/I 2 C Configurations

The MAX30009 supports both SPI and I 2 C serial  interfaces.  However,  the  provided  firmware  and  GUI  only support SPI and do not support I 2 C. If the user prefers

## Table 1. Description of Jumpers

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                               |
|----------|------------------|-----------------------------------------------------------|
| J5       | 1-2              | Connects EL1 (DRVP) to EL2B (BIP) for bipolar measurement |
| J9       | 1-2              | Connects EL4 (DRVN) to EL3B (BIN) for bipolar measurement |
| J6       | 1-2              | Bypasses DC blocking capacitor on EL1 (DRVP)              |
| J4       | 1-2              | Bypasses DC blocking capacitor on EL2B (BIP)              |
| J7       | 1-2              | Bypasses DC blocking capacitor on EL3B (BIN)              |
| J8       | 1-2              | Bypasses DC blocking capacitor on EL4 (DRVN)              |
| J11      | 1-2*             | Selects I 2 C address 1 during I 2 C mode                 |
| J11      | 2-3              | Selects I 2 C address 0 during I 2 C mode                 |

*Default shunt position

## Evaluates: MAX30009

to  use  I 2 C,  there  are  instructions  on  the  board  and  on the schematic for 0Ω resistors to depopulate/populate to change over from SPI to I 2 C. In addition, the LSB of the I 2 C address must be selected using jumper J11. See the MAX30009EVKIT# EV Kit Schematic Diagram for  more details.

## BioZ Configurations

The  MAX30009  offers  several  configurations  to  enable a variety of tests and applications of BioZ functionalities. Capacitors C5, C6, C7, and C8 are coupling capacitors of values 47nF that block DC current from being driven into the  patient  when  the  current  stimulus  is  used.  Jumpers J6, J4, J7, and J8 can be used to bypass these capacitors (see Table 1).

When  voltage  stimulus  or  H-bridge  stimulus  is  used, capacitors  C5  and  C6  need  to  be  replaced  by  surface mount  series  resistors  (0402  package)  to  limit  current from  the  source.  See  the Sine-Wave  Voltage  Stimulus or Square-Wave Voltage (H-Bridge) Stimulus sections of the MAX30009 datasheet for information on choosing the proper resistor value. Do not use jumpers J6 and J8 when current limit resistors are loaded in locations C5 and C6.

## External Oscillator

The MAX30009 contains its own internal 32.768kHz and 32kHz silicon oscillators. The board also has a low-jitter 32.768kHz oscillator  that  is  connected  to  the  FCLK  pin of the device, which provides better frequency accuracy than the MAX30009's internal oscillators. If the user wants to  use  some  other  clock  source,  resistor  R11  can  be removed and a wire can be connected to TP10 on the board.

## MAX30009EVKIT# Evaluation Kit

## Upgrading firmware

In case the MAXSENSORBLE\_EVKIT\_B board firmware needs to be upgraded, Use the following procedure below to properly flash the firmware:

- 1) See Figure  17 for  the  following  step.  Power  down the MAXSENSORBLE\_EVKIT\_B board. Connect the MAXSENSORBLE\_EVKIT\_B board to the MAXDAPTYPE-C  programmer  board.  Ensure  that  the  label 'MAXDAP-TYPE-C' is on the same side as the top of  the  MAXSENSORBLE\_EVKIT\_B board,  as Type USB-C direction matters. Connect the micro USB-B to USB-A cable to your PC via HDK USB port on the MAXDAP-TYPE-C board. After the cable is connected to  your  PC,  the  MAXSENSORBLE\_EVKIT\_B board will power up and have red &amp; yellow status indicator LEDs on. Do not press the power button at this time!.
- 2) Unzip  the MAX30009\_mcu\_flashtools.7z . In the unzipped  folder,  double  click  the  file erase+flash\_

## Evaluates: MAX30009

- nrf52.bat. Note: Do not only copy the .bat file to any other folder, as the .bat file requires support from the files in this folder.
- 3) A command prompt should pop up when the .bat file is  opened.  Follow  instructions  provided  in  the  command  prompt  to  finish  flashing  the  firmware.  If  the command prompt shows Verified Okay , the firmware has been successfully flashed on the MAXSENSOR -BLE\_EVKIT\_B board, as shown in Figure 18.
- 4) Once  finished,  unplug  the MAXDAP-TYPE-C from the  MAXSENSORBLE\_EVKIT\_B  board.  Press  the power  button  on  the  MAXSENSORBLE\_EVKIT\_B until all the LEDs turn off - this will typically take 10 to 20 seconds. If no LEDs are lit, you must still hold press and hold the power button for 20 seconds. Now the MAXSENSORBLE\_EVKIT\_B is ready to be used and can be powered up. The firmware version can be read in the Status window of the GUI.

Figure 17. Connections to flash firmware on MAXSENSORBLE\_EVKIT\_B board.

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

Evaluates: MAX30009

Figure 18. Command prompt display when firmware has successfully been flashed.

<!-- image -->

## Component List

| PART                  |   QTY | DESCRIPTION                                  |
|-----------------------|-------|----------------------------------------------|
| MAXSENSORBLE_EVKIT_B  |     1 | MAX30009EVKIT# EV kit Data Acquisition Board |
| MAX30009_EVKIT_B      |     1 | MAX30009 Evaluation Board                    |
| 101181XX-000XXX       |     1 | USB-C to USB-A Cable, 3ft.                   |
| LP-401320             |     1 | 105mAh LiPo battery                          |
| MAXDAP-TYPE-C         |     1 | Programmer board                             |
| AK67421-1-r 2 USB 2.0 |     1 | USB-A to micro USB-B cable                   |

Note: Indicate that you are using MAX30009EVKIT# EV kit when contacting these component suppliers.

## Ordering Information

#Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX30009EVKIT# | EV Kit |

│

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit Bill of Materials

## MAXSENSORBLE\_EVKIT\_B

| ITEM   | REF_DES                             | DNI/DNP    | QTY   | MFG PART #                                            | MANUFACTURER                          | VALUE ANTENNA;                  | DESCRIPTION 2450AT SERIES; BOARDMOUNT; MINI 2.45 GHZ                                                                                        | COMMENTS   |
|--------|-------------------------------------|------------|-------|-------------------------------------------------------|---------------------------------------|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1 2    | A1 BAT                              | - -        | 1 1   | 2450AT18A100 B2B-PH-K-S(LF)(SN)                       | JOHANSON TECHNOLOGY JST MANUFACTURING | 2450AT18A100 B2B-PH-K-S(LF)(SN) | ANTENNA; 2450MHZ CONNECTOR; MALE; THROUGH HOLE; PH CONNECTOR; 2MM PITCH; SHROUDED HEADER; STRAIGHT; 2PINS                                   |            |
| 3      | C1, C22, C26, C30-C37               | -          | 11    | GRM033R61A104KE15; LMK063BJ104KP                      | MURATA;TAIYO YUDEN                    | 0.1UF                           | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R                                          |            |
| 4      | C2, C15, C25, C38-C43               | -          | 9     | GRM033R61A105ME15                                     | MURATA                                | 1UF                             | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                     |            |
| 5      | C3, C4, C8, C9, C12, C16, C27       | -          | 7     | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; | MURATA;SAMSUNG;MURATA;TDK             | 4.7UF                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                   |            |
| 6      | C5-C7, C10, C13, C14, C47           | -          | 7     | C1005X5R1A475M050BC GRM155R60J226ME11                 | MURATA                                | 22UF                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TC=X5R ;                                                                          |            |
| 7      | C19                                 | -          | 1     | GJM0335C1E1R0WB01                                     | MURATA                                | 1PF                             | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                 |            |
| 8      | C20, C21, C28, C29, C45, C46, Z44   | -          | 7     | GRM0335C1H120GA01                                     | MURATA                                | 12PF                            | CAPACITOR; SMT (0201); CERAMIC CHIP; 12PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                    |            |
| 9      | C23, C24                            | -          | 2     | GRM0335C1H101JA01                                     | MURATA                                | 100PF                           | CAPACITOR; SMT (0201); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                   |            |
| 10     | CN1                                 | -          | 1     | DX07S024JJ3R1300                                      | JAE ELECTRONIC INDUSTRY               | DX07S024JJ3                     | CONNECTOR; FEMALE; SMT; USB TYPE-C CONNECTOR; DX07 SERIES RECEPTACLE; RIGHT ANGLE; 24PINS                                                   |            |
| 11     | DS1, DS2                            | -          | 2     | SML-P11UTT86                                          | ROHM                                  | SML-P11UTT86                    | DIODE; LED; SMT; PIV=1.8V; IF=0.02A                                                                                                         |            |
| 12     | J3                                  | -          | 1     | 5035662500                                            | MOLEX                                 | 5035662500                      | CONNECTOR; FEMALE; SMT; EASY-ON TYPE HOUSING ASSEMBLY; RIGHT ANGLE; 25PINS                                                                  |            |
| 13     | L1, L2                              | -          | 2     | DFE18SBN2R2MELL                                       | MURATA                                | 2.2UH                           | EVKIT PART - INDUCTOR; SMT (0603); SHIELDED; 2.2UH; 20%; 1.2A                                                                               |            |
| 14     | L3                                  | -          | 1     | DFE201610E-4R7M=P2                                    | MURATA                                | 4.7UH                           | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 4.7UH; TOL=+/-20%; 1.3A                                                                             |            |
| 15     | L4                                  | -          | 1     | LQP03HQ3N3B02                                         | MURATA                                | 3.3NH                           | INDUCTOR; SMT (0201); FILM TYPE; 3.3NH; TOL=+/-0.1nH; 0.5A                                                                                  |            |
| 16     | LED                                 | -          | 1     | SML-LX0404SIUPGUSB                                    | LUMEX OPTOCOMPONENTS INC              | SML-LX0404SIUPGUSB              | DIODE; LED; SML; FULL COLOR; WATER CLEAR LENS; RED-GREEN-BLUE; SMT; VF=2.95V; IF=0.1A                                                       |            |
| 17     | R2, R3, R11, R15, R24, R27-R31, R34 | -          | 11    | ERJ-2GE0R00                                           | PANASONIC                             |                                 | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                      |            |
| 18     | R5, R9                              | -          | 2     | ERJ-1GEF1002                                          | PANASONIC                             | 10K                             | RESISTOR; 0201; 10K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                      |            |
| 19     | R6, R7, R16, R17, R23, R25, R26     | -          | 7     | ERJ-1GEF4701C                                         | PANASONIC                             | 4.7K                            | RESISTOR; 0201; 4.7K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                   |            |
| 20     | R8                                  | -          | 1     | ERJ-1GEF3902                                          | PANASONIC                             | 39K                             | RESISTOR; 0201; 39K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                    |            |
| 21     | R10                                 | -          | 1     | NCP15XH103F03                                         | MURATA                                | 10K                             | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                                                          |            |
| 22     | R13                                 | -          | 1     | ERJ-1GEF2613C                                         | PANASONIC                             | 261K                            | RESISTOR; 0201; 261K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                     |            |
| 23     | R14                                 | -          | 1     | CRCW0201100KFK                                        | VISHAY DALE                           | 100K                            | RESISTOR; 0201; 100K OHM; 1%; 100PPM; 0.05W; THICK FILM                                                                                     |            |
| 24     | R18, R19                            | -          | 2     | ERJ-1GEF2000C                                         | PANASONIC                             | 200                             | RESISTOR; 0201; 200 OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                      |            |
| 25     | RA1-RA4                             | -          | 4     | ERJ-1GEF33R0C                                         | PANASONIC                             | 33                              | RESISTOR; 0201; 33 OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                     |            |
| 26     | SW                                  | -          | 1     | EVP-AWCD2A                                            | PANASONIC                             | EVP-AWCD2A                      | SWITCH; SPST; SMT; STRAIGHT; 15V; 0.02A; EVP-AW SERIES                                                                                      |            |
| 27     | U1                                  | -          | 1     | MAX20303KEWN+                                         | ANALOG DEVICES                        | MAX20303KEWN+                   | EVKIT PART- IC; WEARABLE POWER NAMAGEMENT SOLUTION; PACKAGE OUTLINE; WLP 56 PINS; 0.5MM PITCH; PKG. CODE: W563A4+1; PKG. OUTLINE: 21-100104 |            |
| 28     | U2                                  | -          | 1     | NRF52832-CIAA                                         | NORDIC SEMICONDUCTOR                  | NRF52832-CIAA                   | IC; SOC; MULTIPROTOCOL BLUETOOTH LOW ENERGY; ANT; 2.4GHZ RF SOC; WLCSP50                                                                    |            |
| 29     | U3-U6, U9                           | -          | 5     | MAX14689EWL+                                          | ANALOG DEVICES                        | MAX14689EWL+                    | IC; ASW; 0.125A; FREQUENCY-SELECTSBLE; SWITCHED- CAPACITOR VOLTAGE CONVERTER; WLP9 1.2X1.2                                                  |            |
| 30     | U7                                  | -          | 1     | IP4221CZ6-S                                           | NXP                                   | IP4221CZ6-S                     | IC; PROT; ESD PROTECTION FOR HIGH-SPEED INTERFACE; XSON6                                                                                    |            |
| 31     | U8                                  | -          | 1     | S25FS256SAGNFI001                                     | SPANSION                              | S25FS256SAGNFI001               | IC; MMRY; MIRRORBIT FLASH; NON-VOLATILE MEMORY; 1.8V SINGLE SUPPLY WITH CMOS I/O; SERIAL PERIPHERAL INTERFACE WITH MULTI-I/O; WSON8-EP      |            |
| 32     | U10, U11                            | -          | 2     | MAX9062EBS+G45                                        | ANALOG DEVICES                        | MAX9062EBS+G45                  | IC; COMP; ULTRA-SMALL; LOW-POWER SINGLE COMPARATOR; UCSP4                                                                                   |            |
| 33     | U12                                 | -          | 1     | MAX32620IWG+                                          | ANALOG DEVICES                        | MAX32620IWG+                    | IC; UCON; HIGH-PERFORMANCE; ULTRA-LOW POWER CORTEX-M4F MICROCONTROLLER FOR RECHARGEABLE DEVICES; WLP81                                      |            |
| 34     | U13                                 | -          | 1     | 74AUP1G97GF                                           | NXP                                   | 74AUP1G97GF                     | IC; LOGC; LOW-POWER CONFIGURABLE MULTIPLE FUNCTION GATE; XSON6                                                                              |            |
| 35     | U29                                 | -          | 1     | MAX1819EBL33+                                         | ANALOG DEVICES                        | MAX1819EBL33+                   | IC; VREG; 500MA LOW-DROPOUT LINEAR REGULATOR IN UCSP; UCSP6                                                                                 |            |
| 36     | X2, Y2                              | -          | 2     | ECS-.327-6-12                                         | ECS INC                               | 32.768KHZ                       | CRYSTAL; SMT 2.0MM X 1.2 MM; 6PF; 32.768KHZ; +/- 20PPM; -0.03PPM/DEGC2                                                                      |            |
| 37     | Y1                                  | -          | 1     | US3200005Z                                            | PERICOM SEMICONDUCTOR                 | 32MHZ                           | CRYSTAL; SMT 1.6MM X 1.2MM; 8PF; 32MHZ; +/-10PPM; +/- 10PPM                                                                                 |            |
| 38     | PCB                                 | -          | 1     | MAXSENSORBLE                                          | ANALOG DEVICES                        | PCB                             | PCB:MAXSENSORBLE                                                                                                                            | -          |
| 39     | MISC1                               | DNI        | 1     | 101181XX-000XXX                                       | N/A                                   | 101181XX-000XXX                 | CONNECTOR; MALE; PALETTE SERIES 3.0 USB-C TO USB- A; 3FT BLACK                                                                              |            |
| 40     | R1, R4, R12, R20-R22, R32, R33      | DNP        | 0 0   | ERJ-2GE0R00 GJM0335C1E1R0WB01                         | PANASONIC                             |                                 | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                      |            |
| 41     | Z17                                 | DNP        |       | 250R05L1R8AV4                                         | MURATA                                | 1PF                             | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                 |            |
| 42     | Z18                                 | DNP        | 0     |                                                       | JOHANSON TECHNOLOGY                   | 1.8PF                           | CAPACITOR; SMT (0201); MICROWAVE; 1.8PF; 25V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                  |            |
| 43     |                                     | Jan-36 DNP | 0     | N/A                                                   | N/A                                   | N/A                             | TEST POINT; PAD DIA=0.762MM; BOARD HOLE=0.381MM                                                                                             |            |

Evaluates: MAX30009

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit Bill of Materials

## MAX30009EVKIT#

|   ITEM | REF_DES     | DNI   |   QTY | MFG PART #                                                                 | MANUFACTURER                          | VALUE                       | DESCRIPTION                                                                                                             |
|--------|-------------|-------|-------|----------------------------------------------------------------------------|---------------------------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | C5-C8, C14  | -     |     5 | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55                     | TDK; MURATA; MURATA                   | 0.047UF                     | CAP; SMT (0402); 0.047UF; 10%; 25V; X7R; CERAMIC                                                                        |
|      2 | C9          | -     |     1 | C0402C105K8PAC; CC0402KRX5R6BB105                                          | KEMET; YAGEO                          | 1UF                         | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                            |
|      3 | C10, C11    | -     |     2 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC      | MURATA; MURATA; AVX; SAMSUNG          | 10UF                        | CAP; SMT (0402); 10UF; 20%; 10V; X5R; CERAMIC                                                                           |
|      4 | C12, C13    | -     |     2 | C0201C104K9PAC; GRM033R60J104KE19; C0603X5R0J104K030BC; C0201X5R6R3-104KNP | KEMET; MURATA; VENKEL; TDK            | 0.1UF                       | CAP; SMT (0201); 0.1UF; 10%; 6.3V; X5R; CERAMIC                                                                         |
|      5 | J1          | -     |     1 | PPPC161LFBN-RC                                                             | SULLINS ELECTRONICS CORP.             | PPPC161LFBN-RC              | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 16PINS                                    |
|      6 | J2          | -     |     1 | PPPC121LFBN-RC                                                             | SULLINS ELECTRONICS CORP              | PPPC121LFBN-RC              | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                                        |
|      7 | J3          | -     |     1 | FH26W-25S-0.3SHW(60)                                                       | HIROSE ELECTRIC CO. LTD.              | FH26W-25S-0.3SHW(60)        | CONNECTOR; FEMALE; SMT; FPC CONNECTOR; RIGHT ANGLE; 25PINS                                                              |
|      8 | J4-J9       | -     |     6 | PCC02SAAN                                                                  | SULLINS                               | PCC02SAAN                   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                |
|      9 | J10         | -     |     1 | PPPC081LFBN-RC                                                             | SULLINS ELECTRONICS CORP              | PPPC081LFBN-RC              | CONNECTOR; FEMALE; THROUGH HOLE; 0.100INCH CONTACT CENTER 2.54MM FEMALE HEADER; STRAIGHT; 8PINS                         |
|     10 | J11         | -     |     1 | PCC03SAAN                                                                  | SULLINS                               | PCC03SAAN                   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                |
|     11 | J12-J14     | -     |     3 | PBC01SAAN                                                                  | SULLINS ELECTRONICS CORP              | PBC01SAAN                   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN                                                                |
|     12 | J21-J24     | -     |     4 | 41828-50                                                                   | PLASTICS ONE                          | 41828-50                    | CONNECTOR; FEMALE; THROUGH HOLE; JACK; PCB; 1.5MM; TOUCHPROOF WAVE SOLDER VERSION WITH STAMPING; RIGHT ANGLE; 3PINS     |
|     13 | MH1-MH4     | -     |     4 | 9032                                                                       | KEYSTONE                              | 9032                        | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                               |
|     14 | R1A-R4A,R11 | -     |     5 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                             | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH | 0                           | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                 |
|     15 | R5-R10      | -     |     6 | ERJ-2RKF1002                                                               | PANASONIC                             | 10K                         | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
|     16 | TP1-TP11    | -     |    11 | 5011                                                                       | KEYSTONE                              | N/A                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     17 | U1          | -     |     1 | MAX30009ENA+                                                               | ANALOG DEVICES                        | MAX30009ENA+                | EVKIT PART -IC; AFEC; LOW POWER; HIGH PERFORMANCE BIOIMPEDANCE AFE; WLP25                                               |
|     18 | Y1          | -     |     1 | SIT1572AI-J3-18E-DCC-32.768                                                | SITIME CORPORATION                    | SIT1572AI-J3-18E-DCC-32.768 | OSCILLATOR; CSP 1.5MM X 0.8 MM; 15PF; 32.768KHZ ; +/-10PPM                                                              |
|     19 | PCB         | -     |     1 | MAX30009                                                                   | ANALOG DEVICES                        | PCB                         | PCB:MAX30009                                                                                                            |
|     20 | R1B-R4B     | DNI   |     0 | ERJ-2GE0R00                                                                | PANASONIC                             | 0                           | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                             |
|     21 | R13         | DNI   |     0 | ERJ-2GE0R00                                                                | PANASONIC                             | 0                           | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                             |

Evaluates: MAX30009

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit Schematics

MAXSENSORBLE\_EVKIT\_B

<!-- image -->

Evaluates: MAX30009

## MAX30009 EV Kit Schematics (continued)

## MAXSENSORBLE\_EVKIT\_B (continued)

<!-- image -->

Evaluates: MAX30009

## MAX30009 EV Kit Schematics (continued)

## MAXSENSORBLE\_EVKIT\_B (continued)

<!-- image -->

Evaluates: MAX30009

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit Schematics (continued)

## MAXSENSORBLE\_EVKIT\_B (continued)

<!-- image -->

Evaluates: MAX30009

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit Schematics

## MAX30009EVKIT#

<!-- image -->

Evaluates: MAX30009

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit PCB Layout diagrams

## MAXSENSORBLE\_EVKIT\_B

<!-- image -->

MAXSENSORBLE\_EVKIT\_B Component Placement GuideTop Silkscreen

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 2

<!-- image -->

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 4

<!-- image -->

Evaluates: MAX30009

<!-- image -->

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Top View

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 3

<!-- image -->

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 5

<!-- image -->

│

## MAX30009 EV Kit PCB Layout diagrams (continued)

## MAXSENSORBLE\_EVKIT\_B (continued)

<!-- image -->

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 6

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 8

<!-- image -->

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 10

<!-- image -->

Evaluates: MAX30009

<!-- image -->

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 7

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 9

<!-- image -->

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Internal 11

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit PCB Layout diagrams (continued)

## MAXSENSORBLE\_EVKIT\_B (continued)

MAXSENSORBLE\_EVKIT\_B PCB Layout Diagrams-Bottom View

<!-- image -->

Evaluates: MAX30009

MAXSENSORBLE\_EVKIT\_B Component Placement GuideBottom Silkscreen

<!-- image -->

│

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit PCB Layout Diagrams

## MAX30009EVKIT#

<!-- image -->

MAX30009EVKIT# EV Kit Component Placement Guide-Top Silkscreen

Evaluates: MAX30009

│

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit PCB Layout Diagrams (continued)

## MAX30009EVKIT# (continued)

<!-- image -->

MAX30009EVKIT# EV Kit PCB Layout Diagrams-Top View

Evaluates: MAX30009

│

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit PCB Layout Diagrams (continued)

## MAX30009EVKIT# (continued)

<!-- image -->

MAX30009EVKIT# EV Kit PCB Layout Diagrams-Internal 2

Evaluates: MAX30009

│

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit PCB Layout Diagrams (continued)

## MAX30009EVKIT# (continued)

<!-- image -->

MAX30009EVKIT# EV Kit PCB Layout Diagrams-Internal 3

Evaluates: MAX30009

│

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit PCB Layout Diagrams (continued)

## MAX30009EVKIT# (continued)

<!-- image -->

MAX30009EVKIT# EV Kit PCB Layout Diagrams-Bottom View

Evaluates: MAX30009

│

## MAX30009EVKIT# Evaluation Kit

## MAX30009 EV Kit PCB Layout Diagrams (continued)

## MAX30009EVKIT# (continued)

<!-- image -->

MAX30009EVKIT# EV Kit Component Placement Guide-Bottom Silkscreen

Evaluates: MAX30009

│

## MAX30009EVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/21           | Initial release                                                                                                                                                              | -               |
|                 1 | 07/22           | Updated General Description , EV Kit Contents , Quick Start , Detailed Description of Software sections. Updated Figure 3. Connect To Device window and Component List table | 1-5, 20         |
|                 2 | 3/24            | Added notes, updated Quick Start section, added MAXSENSORBLE_EVKIT_B Bill of Materials , Schematics , and PCB Layout Diagrams                                                | 1, 2, 21-36     |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX30009