<!-- lastmod 2022-08-03 -->
## MAX11410 Evaluation Kit

## General Description

The MAX11410 evaluation kit (EV kit) demonstrates the 24-bit multi-channel low-power delta-sigma ADC. The EV kit includes a graphical user interface (GUI) that provides communication from the target device to the PC. The GUI allows the user to configure all the registers and includes graphing software to display captured data and calculate the histogram and FFT.

## EV Kit Contents

- MAX11410 EV kit
- Micro-USB cable

## MAX11410 EV Kit Files

| FILE                   | DESCRIPTION         |
|------------------------|---------------------|
| MAX11410EVKitSetup.exe | Application Program |

## MAX11410 EV Kit Photo

<!-- image -->

Windows XP and Windows 7 are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

## Evaluates: MAX11410/MAX11410A

## Features

- Easy Evaluation of MAX11410/MAX11410A
- USB Powered
- Selectable On-Board Voltage Reference (2.5V, 1.25V)
- Optional External Clock (2.4576MHz)
- Isolated Power and Digital Communication
- Various Sample Rates and Sample Sizes
- Time Domain, Frequency Domain, and Histogram Plotting
- Savable Plots and Register Configurations
- Windows XP ® , Windows ®  7, Windows 8.1-Compatable Software
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX11410 Evaluation Kit

## Quick Start

## Required Equipment

- MAX11410 EV kit
- Windows XP, Windows 7, or Windows 8.1 PC
- Micro-USB cable
- Screwdriver
- Wires

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underline refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Ensure  that  the  jumpers/shunts  are  in  their  default locations. Refer to Table 2.
- 2) Prior to starting the GUI, connect the EV kit hardware to  a  PC  using  the  supplied  micro-USB  cable.  The Power LED (DS1) should be green.
- 3) The EV kit hardware is configured as a HID device so  Windows  should  automatically  begin  installing the necessary drivers. Once the driver installation is complete,  a  Windows  message  appears  near  the System Icon menu indicating the hardware is ready to  use.  If  the  GUI  was  started  before  this  message appears then restart the GUI.
- 4) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX11410EVKitSetup.ZIP.
- 5) Save the EV kit software to a temporary folder. Unzip the .ZIP file and double-click the .EXE file to run the installer. A message box asking Do you want to allow the  following  program  to  make  changes  to  this computer? may appear. If so, click Yes .
- 6) Follow  the  instructions  on  the  installer  and  once complete,  click Finish .  The  default  location  of  the software is in the program files directory.

## Evaluates: MAX11410/MAX11410A

- 7) Launch  the  GUI  and  when  it  appears  it  should automatically  connect  to  the  hardware.  The  GUI should display EV Kit Hardware Connected in  the lower right hand corner.
- 8) Connect a signal to the desired inputs (A0-A9) on the screw connector (J1-J2) using a wire and a screwdriver. For example, connect the 1.25V REF  testpoint to A2.
- 9) In  the  GUI  on  the ADC Config tab,  select AINP to AIN2 and AINN to GND for the Channel MUX .
- 10)  Click Convert and then Click Read Data and Status to see the converted data.

## Detailed Description

## Software Startup

When the software is started, it searches for the EV kit hardware and connects to it if found. If connection to the EV kit is successful, the GUI displays EV Kit Hardware Connected in  the  status  bar's  lower-right  corner.  Then it  writes  default  registers  settings  shown  in Table  1  and reads all the registers to display on the GUI.

## Status Log

The Status Log group box below the tabs displays all the actions the GUI performs. When an action is requested, the log confirms the action or shows an error message. The log can be cleared by pressing the Clear Log button.

## Table 1. Startup GUI Registers Settings

| SETTING         | VALUE      |
|-----------------|------------|
| Digital Filter  | 60Hz SINC4 |
| Sample Rate     | 59.8sps    |
| MUX - AINP      | AIN2       |
| MUX_AINN        | GND        |
| Channel         | 0          |
| Conversion Mode | Continuous |

## ADC Config Tab

The ADC  Config tab  provides  an  interface  for  configuring  the  IC  from  a  functional  perspective.  The Block tab (Figure 1) provides for configuration of the input MUX, input path, data format, filtering, calibration, reference current sources, V BIAS , and power. To read all the configuration settings, click the Read All button in the Serial Interface block. When a setting is changed, the register associated with that setting is automatically written. The Status Log at the bottom of the GUI shows the value and register that was changed. Once the configurations are completed, start conversions by clicking Convert in the Serial Interface block. To read the data and status, click Read Data and Status on the lower-right of the GUI. This, first, reads the status register and then the data registers for the channel selected, displaying the value in volts and hex. For the data in volts to be calculated correctly, the Reference Voltage numeric box on the left should match the reference applied on the hardware. Note: All voltage values are input referred.

Figure 1. Quick-Start Connection Diagram

<!-- image -->

## Other Tab

The Other tab sheet (Figure 2) displays the thresholds, wait, GPIO, clock, and INT options. To read all the values on the tab, click Read All on the bottom right. The Channel Thresholds table allows reads/writes to the upper and lower threshold. The display unit can be changed to LSB, V, mV, or uV using the Threshold Units drop-down list. The TUR INT and TOR INT bits for the under and over range interrupts can be enabled by checking the checkbox for the channels desired.

To start a wait time, enter the desired decimal value in the Wait and Wait Extension numeric boxes. Note: Entering a value in the Wait numeric box does not perform a write to the part. Click Calculate Wait Time to see the equivalent wait time of these decimal values based on a 2.4576MHz clock. Click Start Wait Time to write the value in the Wait numeric box and begin the wait time.

Figure 2. EV Kit Software (ADC Config Tab &gt; Other)

<!-- image -->

## Sequence Tab

The Sequence tab sheet (Figure 3) allows read/writes to the microcode registers (uC0-uC52). Click Read All to read all microcode registers. To write a register first select the hex value in the Value (Hex) column then type the desired hex value and press Enter on the keyboard. To start the sequence, enter the hex address of the microcode to start at in the Sequence Start Address and then click Start Sequence . During a sequence, the current address of the executing microcode can be read by clicking Read Current Address .

Figure 3. EV Kit Software (ADC Config Tab &gt; Sequence)

<!-- image -->

## Save/Load ADC Configuration

In the File menu, there are options to save or load a configuration file. Save ADC Config As.. and Save ADC Config read the registers from the connected MAX11410 EV kit and saves these values to an XML file. This includes the microcode registers as well. Load ADC Config gets register values from an XML file and writes them to the MA11410 EV kit.

## Scope Tab

The Scope tab sheet (Figure 4) is used to capture data and display it in the time domain. Sample rate and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. The Display Unit drop-down list allows LSB and voltages. Once the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the waveform, such as average, standard deviation, maximum, minimum, and fundamental frequency. To save the captured data to a file, go to Options &gt; Save Graph &gt; Scope . This saves the setting on the left and the data captured to a csv file.

Figure 4. EV Kit Software (Scope Tab)

<!-- image -->

## DMM

The DMM tab sheet (Figure 5) provides captured data as a digital multimeter. Once the desired configuration is set, click the Capture button.

Figure 5. EV Kit Software (DMM Tab)

<!-- image -->

## Histogram

The Histogram tab sheet (Figure 6) is used to display a histogram of the captured data. Sampling rate and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. Once the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the histogram such as average, standard deviation, maximum, minimum, peak-to-peak noise, effective resolution, and noise-free resolution. To use this histogram feature, uncheck the Disable Histogram checkbox. To save the histogram data to a file, go to Options &gt; Save Graph &gt; Histogram . This saves the setting on the left and the histogram data captured to a csv file.

Figure 6. EV Kit Software (Histogram Tab)

<!-- image -->

## FFT

The FFT tab  sheet  (Figure  7)  is  used  to  display  the  frequency  domain  FFT  of  the  captured  data.  Sample  rate  and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. Once the desired configuration is set, click on the Capture button. The right side of the tab displays the performance based on the FFT, such as fundamental frequency, THD, SNR, SINAD, SFDR, ENOB, and noise floor. To save the FFT data to a file, go to Options &gt; Save Graph &gt; FFT . This saves the setting on the left and the FFT data captured to a csv file.

Figure 7. EV Kit Software (FFT Tab)

<!-- image -->

## MAX11410 Evaluation Kit

## Registers

The Registers tab  sheet  (Figure  8)  allows  the  user  to read/write to the ADC registers in hex format. Click Read All to  read all registers and refresh the window with the register  settings.  To  write  a  register  first  select  the  hex value  in  the Value  (Hex) column  then  type  the  desired hex  value  and  press  Enter  on  the  keyboard.  The Bit Description section  shows  the  format  of  the  register selected in the Registers table.

## Detailed Description of Hardware

The  EV  kit  hardware  includes  the  MAX11410  ADC, external reference (MAX6072), digital isolator (MAX14935), microcontroller (MAXQ622), isolated power, and jumpers to customize the configuration. See the links at  the  end  of  this  data  sheet  for  component  information, PCB layout diagrams, and schematic.

## Evaluates: MAX11410/MAX11410A

## Reference Voltage

The ADC has three pairs of REFP/REFN pins to select as reference pins. In the GUI, go to the Block tab on the ADC Config tab and select the desired reference pins in the Reference block.  When  using  the  on-board  voltage reference, move JP7 to the same REFXP selected in the GUI. If using REF0N, connect A1 on the screw terminal to GND or remove the AIN1 jumper on JP8 and connect AIN1 to GND. The default reference value is set to 2.5V. The EV kit also provides a reference of 1.25V by moving JP6 to 1.25V REF  and changing the Reference Voltage to 1.25V on the ADC Config tab.

If  using  a  user-supplied  voltage  reference,  remove  all jumpers on JP7, JP10, and JP11 and supply the reference on  the  REFXP  and  REFXN  testpoints.  If  using  REF0P/ REF0N  connect  the  reference  to  A0/A1  on  the  screw terminal  or  remove  the AIN0/AIN1  jumpers  on  JP8  and supplied  the  voltage  on  AIN0/AIN1  pins.  In  the  GUI, change the Reference Voltage on the ADC Config tab to the user-supplied voltage.

Figure 8. EV Kit Software (Registers Tab)

<!-- image -->

│

## MAX11410 Evaluation Kit

## ADC Inputs

The ADC inputs at the screw terminal (J1, J2) have series 1kΩ input protection resistors. To bypass these resistors, remove the jumpers on JP8 and connect to the AINX pin on the right.

## External Clock

The ADC can be configured to use an external clock. In the GUI, go to the Other tab on the ADC Config tab and change the clock to External using the Clock drop-down list. To use the on-board oscillator, move a jumper to the CLK position on JP4. To connect a user-supplied clock, remove any jumper on JP4 and connect the signal to the GPIO0/CLK testpoint.

## GPIO

Testpoints  and  jumpers  are  provided  for  the  two  GPIO signals. To set the input/output modes of the GPIO go to the Other tab on the ADC Config tab. If the GPIOs are set  as  inputs  the  jumpers  JP5  and  JP4  can  be  used  to set the inputs high or low. See Table 2. Each GPIO has a  100kΩ resistor  to  GND  on  the  EV  kit.  GPIO0  has  an added option be being set to an external clock. See the External Clock section.

## User-Supplied SPI

To evaluate the ADC on this EV kit with a user-supplied SPI  bus,  disconnect  digital  signals  from  the  isolator  by removed  resistors  R50-R53.  Apply  the  user-supplied SPI signals to CSB, MOSI, MISO, and SCLK at the SPI and GPIO Header (J5). Make sure the return ground is connected to GND on the EV kit.

Table 2. Description of Jumpers

| JUMPER   | JUMPER NAME   | JUMPER POSITION   | DESCRIPTION                             |
|----------|---------------|-------------------|-----------------------------------------|
| JP1      | AV DD         | Short*            | Connects on-board V DUT to AV DD        |
| JP2      | V DDREG       | Short*            | Connects on-board V DUT to V DDREG      |
| JP3      | V DDIO        | Short*            | Connects on-board V DUT to V DDIO       |
| JP4      | GPIO0/CLK     | V DDIO            | Sets GPIO0 high (V DDIO ) Note 1        |
| JP4      | GPIO0/CLK     | CLK               | Provides an external clock to GPIO0/CLK |
| JP4      | GPIO0/CLK     | GND               | Sets GPIO0 low (GND)                    |
| JP5      | GPIO1         | V DDIO            | Sets GPIO1 high (V DDIO ) Note 1        |
| JP5      | GPIO1         | GND               | Sets GPIO1 low (GND)                    |
| JP6      | V REF         | 2.5V REF *        | Sets V REF to 2.5V                      |
| JP6      | V REF         | 1.25V REF         | Sets V REF to 1.25V                     |

│

## Evaluates: MAX11410/MAX11410A

## EV Kit Power

By default the EV kit is configured to power from the USB 5V.  To  power  the  board  externally,  first  disconnect  the USB. Then move JP14 to EXT\_5V and connect 5V to the EXT\_5V testpoint or to the power jack J6. Connect the USB for communication with the GUI.

## VDUT Power

VDUT powers the ADC and one side of the digital isolator. By default V DUT  is connected to V ADJ , which is the output of  an  adjustable LDO (MAX8842) set to 3.3V. To adjust VADJ,  change  resistors  R80  and  R81  according  to  the equation  below  for  the  desired  output.  Ensure  V ADJ   is within the range 3.6V to 2.8V as the minimum voltage for the MAX6072 is 2.8V and the maximum voltage for the MAX11410 is 3.6V.

<!-- formula-not-decoded -->

VDUT can also be power externally with EXT\_VDUT test point. To power externally, move JP12 to EXT\_DUT and provide a voltage (3.6V to 2.7V) on the test point.

## Table 2. Description of Jumpers (continued)

| JUMPER   | JUMPER NAME   | JUMPER POSITION   | DESCRIPTION                                                       |
|----------|---------------|-------------------|-------------------------------------------------------------------|
| JP7      | REFP          | REF0P             | Sets REF0P(AIN0) to V REF                                         |
| JP7      | REFP          | REF1P*            | Sets REF1P to V REF                                               |
| JP7      | REFP          | REF2P             | Sets REF2P to V REF                                               |
| JP8      | AINX          | Short*            | Connects AINX input to screw terminal through 1kΩ resistor        |
| JP9      | REFXP         | Short*            | Connects REFXP input to screw terminal through 1kΩ resistor       |
| JP10     | REF1N         | Short*            | Sets REF1N to GND                                                 |
| JP11     | REF2N         | Short*            | Sets REF2N to GND                                                 |
| JP12     | V DUT         | EXT_VDUT          | V DUT is powered from external EXT_VDUT test point                |
| JP12     | V DUT         | V ADJ *           | V DUT is powered from on-board V ADJ                              |
| JP13     | 5V ENABLE     | Short*            | Enabled 5V from transformer T1                                    |
| JP14     | POWER         | EXT_5V            | Board is powered from external EXT_5V test point or J6 power jack |
| JP14     | POWER         | V USB *           | Board is powered from USB 5V                                      |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11410EVKIT# | EV Kit |

│

## MAX11410 EV Kit Bill of Materials

## MAX11410 EV Kit Bill of Materials (continued)

## MAX11410 EV Kit Schematics

<!-- image -->

## MAX11410 EV Kit Schematics (continued)

<!-- image -->

## MAX11410 EV Kit Schematics (continued)

<!-- image -->

## MAX11410 EV Kit PCB Layouts

<!-- image -->

<!-- image -->

│

## MAX11410 EV Kit PCB Layouts (continued)

<!-- image -->

<!-- image -->

│

## MAX11410 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------|-----------------|
|                 0 | 3/16            | Initial release                                             | -               |
|                 1 | 1/21            | Added part numer MAX11410A to the title and Feature section | 1-20            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX11410/MAX11410A