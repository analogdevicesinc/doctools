<!-- lastmod 2022-08-02 -->
## MAX8973A Evaluation Kit

## General Description

The MAX8973A evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX8973A. The EV kit allows for easy evaluation of each MAX8973A features.

The MAX8973A is a high-efficiency, three-phase, DC-DC step-down  switching  regulator  that  delivers  up  to  9A  of output current in a compact footprint with excellent transient  response.  Each  phase  operates  at  a  2MHz  fixed frequency,  allowing  the  use  of  small  magnetic  compo -nents.  Maxim  Integrated's  proprietary  Rotational  Phase Spreading  algorithm  optimizes  efficiency  at  low  output currents.  Software-selectable  forced-PWM  mode  allows either fixed-frequency operation, or improved efficiency at light load with a variable frequency in skip mode. The triple-inductor architecture reduces the size of the external components while providing the benefit of ripple current cancellation. An I 2 C 3.0-compatible serial interface, sup -porting clock rates up to 3.4MHz, controls key regulator parameters such as output voltage, output slew rate, and on/off control. An EN input enables and disables the out -put, while a DVS pin selects two different output voltages without  relying  on  the  serial  interface.  MAX8973A  fully differential remote sense ensures precise DC regulation at the point of load.

Windows ®  based software provides a user-friendly interface to exercise the features of the MAX8973A. This software offers a graphical user interface (GUI) as well as a register-based interface.

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Sense Points for High-Accuracy Measurements
- Test Points and Jumpers for Enable, DVS, and BIAS Enable
- Option to Enable Output Voltage Remote Sensing
- On-Board Electronic Load to Evaluate Static or Transient Load Up to 10A
- User Can Evaluate Preprogrammed Settings Without I 2 C Interface

<!-- image -->

Figure 1. MAX8973A Evaluation Kit

<!-- image -->

## Default Configurations

- V IN and V CC  = 2.6V to 4.5V
- V OUT = 1.0V (when DVS = 0), 1.2V (when DVS = 1)
- I OUT = 9A maximum
- Converter enable is disabled (EN = 0)
- EN pulldown resistance is enabled (nENPD\_EN = 0)
- Forced PWM mode is disabled (FPWM = 0)
- Regulator bias is disabled (BIASEN = 0)
- Frequency shift (switching frequency per phase) = 2MHz typical (FREQSHIFT = 0)
- Falling slew rate is enabled (nFSR\_EN = 0)
- Slew rate selection = 20mV/µs for startup/soft-stop and 50mV/µs for DVS (RAMP = 0b10)
- Remote sense is disabled (SNS\_EN = 0)
- Output active discharge is disabled (AD\_EN = 0)
- Enhanced transient response (ETR) sensitivity selection is disabled (CKADV = 0b11)
- Slope compensation and RCS Gain = Nominal (INDUCTOR = 0b01)
- Shunt positions (JU1-3, JU6-10, JU13-14) installed as shown in Table 1

## Quick Start

## Required Equipment

- MAX8973A evaluation package
- MAX8973A EV kit
- Micro-B USB cable
- MAX8973A EV kit software (GUI)
- Adjustable DC power supply capable of supplying 6A
- Electronic load capable of sinking 9A (optional)
- Oscilloscope
- Two voltmeters
- Two ammeters

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold only refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows OS.

Evaluates: MAX8973A

## Quick Start Procedure

The EV kit is fully assembled and tested. See Figure 2 and use the following steps to verify board operation:

- 1) Ensure all shunts are installed in the proper positions ( Table 1 ).
- 2) Connect a disabled 3.6V bench power supply to the GND and VIN1 terminals (binding posts). Set the input current limit of the bench supply to 0.1A. Do not enable the output of the bench supply until prompted.
- As an option, connect an ammeter set for its 10mA range in series with your power supply.
- Note that GND5 and VIN loops are not suitable for high current applications.
- 3) Connect a voltmeter to the GNDS and VINS termi -nals to measure input voltage.
- Note these are Kelvin sense points that route close to the device's input capacitors.
- 4) Connect a voltmeter to the GNDS and VOUTS termi -nals to measure output voltage.
- Note these are Kelvin sense points that route close to the device's output capacitors.
- 5) Enable the output of the bench supply. Confirm that the input current is &lt; 10μA.
- 6) Connect a Micro-B USB cable between a PC with the MAX8973A evaluation kit software installed and the MAX8973A evaluation kit.
- 7) Open the MAX897x GUI window ( Figure 3).
- 8) In the Communication Protocol: drop-down menu, select Auto . Then click Connect . If the connection is successful, the blue question mark over the Maxim logo transitions to a green check mark, and the text box at the bottom of the window reads Connected to I2C device at address 0x36 (Figure 4).
- 9) Increase the input current limit of the bench supply to 1A.
- 10) Click on Enable Output and verify that the output voltage should be about 1V.
- 11)  Confirm the input current is from 120μA to 200μA.
- 12) This concludes the initial setup procedure and the board is now ready for evaluation of other features and register settings with the GUI.

## MAX8973A Evaluation Kit

## Table 1. Default Shunt Positions and Jumper Descriptions

Figure 2. Quick Start Connection Diagram

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1                    | 2-3                | 1-2: Connects a 3.3V onboard LDO output to the VDD input. 2-3: Connects a 1.8V onboard LDO output to the VDD input.                                                                                                                                                                                                                                                         |
| JU2                    | 1-2                | 1-2: Connects the output of the programmable electronic load to the gate of the onboard power FET for closed-loop load control. 2-3: Connects the gate of the onboard power FET to the J3 BNC connector to enable load transient testing with a function generator.                                                                                                         |
| JU3                    | 2-3                | 1-2: Connects pin D3 (CS) to the level translator. Used for SPI version only. 2-3: Connects pin D3 to GND.                                                                                                                                                                                                                                                                  |
| JU6                    | 2-3                | 1-2: Connects EN pin to VCC to enable the MAX8973A through hardware. 2-3: Connects EN pin to GND. The MAX8973A is enabled through software.                                                                                                                                                                                                                                 |
| JU7                    | 2-3                | 1-2: Connects DVS pin to VCC. DVS = VCC selects the target output voltage set in the VOUT_DVS register (address 0x01h). Default = 1.2V. 2-3: Connects DVS pin to GND. DVS = GND selects the target output voltage set in the VOUT register (address 0x00h). Default = 1.0V.                                                                                                 |
| JU8                    | 2-3                | 1-2: Connects BIASEN pin to VCC. BIASEN = VCC preenables the bias and reference circuitry, reducing the delay from the rising edge of EN to the MAX8973A switching. 2-3: Connects BIASEN pin to GND. BIASEN = GND does not preenable the bias and reference. The delay from the rising edge of EN to the MAX8973A switching includes the bias and reference settling times. |
| JU9                    | 1-2                | 1-2: Connects SDA(I 2 C) input/output from the MAXQ2000 to the MAX8973A. 2-3: Connects MOSI (SPI) output from the MAXQ2000 to the MAX8973A.                                                                                                                                                                                                                                 |
| JU10                   | 1-2                | 1-2: Connects SCL (I 2 C) output from the MAXQ2000 to the MAX8973A. 2-3: Connects SCLK (SPI) output from the MAXQ2000 to the MAX8973A                                                                                                                                                                                                                                       |
| JU13                   | 1-2                | 1-2: Connects 470Ω pullup resistor from VDD to SDA/MOSI. Open: Disconnects SDA/MOSI pullup resistor from SDA/MOSI.                                                                                                                                                                                                                                                          |
| JU14                   | 1-2                | 1-2: Connects 470Ω pullup resistor from VDD to SCL/SCLK. Open: Disconnects SDA/MOSI pullup resistor from SCL/SCLK.                                                                                                                                                                                                                                                          |

<!-- image -->

Evaluates: MAX8973A

│

## Detailed Description of Hardware and Software

## Using the MAX8973A GUI

The MAX8973A requires the use of a GUI in order to fully exercise the capabilities of the device. Figure 3 shows the main GUI window, prior to connecting to the device. See the Quick Start Procedure section for instructions on how to connect the device before using the GUI.

## Obtaining the GUI

The MAX8973A GUI can be downloaded from the Maxim website ( www.maximintegrated.com ). Follow the instructions to install the GUI on a PC. During installation, wait a few minutes for your computer to install the USB

driver. Once the driver is successfully installed, a window appears  to  indicate  that  the USB  Serial  Converter is ready to use.

## Connecting the GUI

Select Auto next to Communication Protocol . Click on Connect in  the  upper  left  corner  of  the  GUI  window.  If a  device  is  detected  and  connection  is  successful,  the blue  question  mark  over  the  Maxim  logo  transitions  to a  green  check  mark  and Connected to  I2C  device  at address 0x36 replaces DEMO MODE: Not connected at  the  bottom  of  the  window  (Figure  3  and  Figure  4). Another  tab Load  Control appears  to  the  right  of MAX897x Registers . See the On-Board Electronic Load section  for  a  detailed  description  of  the  programmable on-board load.

Figure 3. GUI Window-Not Connected

<!-- image -->

Figure 4. GUI Window-Connected

<!-- image -->

│

## MAX897x Configuration: Output Voltage Control

The MAX8973A GUI can be used to enable the regulator and program the output voltage.

## Enabling and Disabling the Regulator

Turn  on  the  regulator  by  checking  the  box Enable Output .  Turn  off  the  regulator  by  unchecking  the  box Enable Output .

Alternatively,  turn  on  the  regulator  by  connecting  the shunt  on  jumper  JU6  between  terminals  1  and  2.  Turn off the regulator by connecting the shunt on jumper JU6 between terminals 2 and 3. The EN bit is logically OR'd with the EN pin.

## Setting the Output Voltage

The MAX8973A features a programmable output voltage from 0.60625V to 1.4000V in 6.25mV increments. These settings can be configured using the Output Voltage section of the main GUI window.

Once connected to the GUI, the default voltages appear in the pulldown menus under VOUT (V) and VOUT\_DVS (V). The output voltage listed under VOUT (V) is selected when the DVS pin is connected to GND (shunt on JU7 between  terminals  2  and  3).  The  output  voltage  listed under VOUT\_DVS (V) is selected when the DVS pin is connected  to  VCC  (shunt  on  JU7  between  terminals  1 and 2).

Alternatively, the DVS pin can be tied to GND or VCC, and the  appropriate  register  (VOUT  or  VOUT\_DVS)  can  be written to repeatedly in order to adjust the output voltage.

## MAX897x Configuration: Primary Control

The MAX8973A features several different programmable options to customize the behavior of the regulator during startup, operation, and shutdown. These settings can be configured using the Primary Control section of the main GUI window.

## Remote Sense (SNSEN)

The MAX8973A features remote sense capability, in addi -tion to a high-bandwidth local feedback loop. The remote sense loop compensates for voltage droop in the power plane, thus reducing DC error at the point of load.

Checking  the  box Enable  Remote  Sense enables  the remote  sense  amplifier  in  the  MAX8973A.  The  remote sense pins, SNS+ and SNS-, connect to the point-of-load capacitors  (C15,  C16,  C22,  and  C23)  through  R13  and R14, respectively.

When  using  the  remote  sense  feature,  the  output  volt -age should be measured at the VOUT+ and VOUT- wire loops, rather than across the VOUTS and GNDS kelvin sense points. The kelvin sense points measure the output voltage at the local output capacitors. The kelvin sense voltage increases, depending on load current, due to the voltage drop through the power plane and GND return.

## Forced PWM Mode (FPWM\_EN)

The MAX8973A features a forced-PWM mode for applications that require a fixed switching frequency regardless of load current.

Checking  the  box Enable  Forced  PWM  Mode selects forced-PWM mode operation.

## Falling Slew Rate Control (nFSR\_EN)

The MAX8973A features a software-selectable mode of operation where the regulator actively sinks current from the output capacitors when:

- 1) The output voltage is changed from a higher value to a lower value.
- 2) The regulator is disabled.

Uncheck the box to Disable Falling Slew Rate Control to enable the falling slew rate control. When enabled, the falling slew rate control ramps down the output voltage at the rate selected by the DVS rising slew rate bits. If the load current causes the output voltage to fall faster than the selected slew rate, the regulator supplies current to the load to maintain the selected slew rate.

If the falling slew rate control is enabled when the regulator  is  disabled,  the  regulator  actively  pulls  energy  from the output capacitor until the output voltage has fallen to 100mV (typ), at which time the active discharge function is terminated.

## Active Discharge Resistor

The MAX8973A features a 100Ω internal discharge resis -tor to discharge the output capacitors when the regulator is disabled. The active discharge resistor is independent of the falling slew rate control.

Check  the  box Enable  100  ohm  Active  Discharge to enable the discharge resistor when the regulator is disabled.

## BIAS Enable

The MAX8973A features a mode of operation where the bias  can  be  preenabled,  reducing  the  delay  from  EN (pin  or  bit)  rising  to  the  MAX8973A  regulator  starting  to switch. The BIASEN bit is logically OR'd with the BIASEN pin.  When BIASEN (pin or bit) = 1, the startup delay is reduced from 240µs to 20µs.

Check the box Enable BIAS to  preenable  the  bias  and reference of the MAX8973A.

## Switching Frequency

The MAX8973A features a software-selectable switching frequency.  The  default  switching  frequency  is  2.0MHz. Check the box -9% Shift to reduce the MAX8973A switching frequency to 1.82MHz (typ).

## DVS Rising Slew Rate

The  MAX8973A  features  four  software-selectable  slew rates when increasing the output voltage. The slew rate selection  also  determines  the  soft-start  slew  rate  when the regulator is enabled.

The DVS rising slew rate options are 12.5mV/µs, 25mV/ µs, 50mV/µs, and 200mV/µs. The 12.5mV/µs, 25mV/µs, and 50mV/µs rising slew rates set a soft-start slew rate of 20mV/s. The 200mV/s rising slew rate sets a soft-start slew rate of 200mV/µs.

## MAX897x Configuration: Advanced Controls

The MAX8973A features several advanced options to fine tune the behavior of the regulator during startup, operation, and shutdown. These settings can be configured using the Advanced Control section of the main GUI window.

## Inductor Adjustment

The MAX8973A is optimized for use with 0.68µH inductor with 27mΩ DCR. The Nominal setting should always be used with the default components installed.

If  the  default  inductor  is  removed  and  replaced  with  a lower  inductance,  it  might  be  necessary  to  select  the -30% setting. If a larger inductance, or an inductor with &gt; 27mΩ is installed, then the +30% or +60% setting might be needed.

These settings should not be changed while the regulator is enabled because they affect the loop compensation.

## Clock Advance Trip Point

The  clock  advance  trip  point  sets  the  sensitivity  of  the enhanced transient response (ETR) circuitry. The default setting  for  ETR  is Disabled .  The  other  values  ( 75mV/ µs and 150mV/µs ) represent the slew rate on the output capacitors (induced by a fast load step) required to trigger the ETR circuitry.

The ETR circuitry speeds up the transient response for medium-to-large load steps.

## EN Pulldown Resistor

The  MAX8973A  provides  a  pulldown  resistor  on  the  EN pin  for  use  with  systems  in  which  the  signal  driving  EN can float. Uncheck the box Disable 500kohm pull-down on  EN  pin to  enable  the  pulldown  resistor.  Check  the box to disable the pulldown resistor. The DISCH\_ENb bit connects  (active  low)  and  disconnects  the  EN  pulldown resistor.

## SCL Watchdog Timer

The  MAX8973A  features  an  I 2 C  watchdog  timer  that resets the I 2 C  state  machine  if  I 2 C  communication  fails during a transaction. Checking the box Enable 35ms SCL Watchdog Timer enables the watchdog timer. If enabled, the  watchdog  timer  starts  on  an  I 2 C  START  command. The watchdog timer resets on every SCL falling edge. The watchdog timer stops on an I 2 C STOP command.

## Load Control: On-Board Electronic Load

The  MAX8973A  evaluation  kit  provides  an  on-board electronic  load  to  simplify  evaluation  of  the  device.  The on-board  electronic  load  supports  static  loads  of  up  to 10A,  as  well  as  transient  loads  of  up  to  10A,  but  not concurrently. Static or transient loads are selectable with the shunt position on jumper JU2. Note that under heavy static loads, the on-board electronic load can become hot. Do not touch the electronic load, particularly if the D1 LED is illuminated.

## MAX8973A Evaluation Kit

## Static Loads

Install  the  shunt  on  jumper  JU2  between  terminals  1 and  2  to  use  the  on-board  electronic  load  to  generate static loads on the MAX8973A output. Click on the Load Control tab in the GUI window to access the electronic load control GUI ( Figure 5).

The  electronic  load  features  selectable  full-scale  load ranges of 10mA, 100mA, 1A, and 10A. Click on the radio button to select the desired load range.

Within each full-scale load range, load current is program -mable with 12-bit resolution. Type the desired load current into the text box immediately below Load Current or use the  slider  bar  to  set  the  load  current.  When  using  the slider bar, the left and right arrows on the keyboard can be used to fine-tune the load current, 1LSB at a time.

## Transient Loads

Install the shunt on jumper JU2 between terminals 2 and 3  to  use  the  on-board  electronic  load  to  generate  transient loads on the MAX8973A output. Click on the Load Control tab in the GUI window to access the electronic load control GUI ( Figure 5).

The Load Range selection determines the amplitude of load transients that the electronic load can produce. An external function generator is required to drive the gate of the power device within the electronic load to generate the transient load. The amplitude of the function generator output determines the amplitude of the load transient, while  the  rise  time  determines  the  transient  load  slew rates. Load transient slew rates of approximately 50A/µs can be realized with the onboard electronic load.

Figure 5. GUI Window-Electronic Load

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8973AEVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX8973A

│

## MAX8973A Evaluation Kit

## MAX8973A EV Kit Bill of Materials

| PART                                                 |   QTY | DESCRIPTION                                                             |
|------------------------------------------------------|-------|-------------------------------------------------------------------------|
| C1 C3 C16 C21 C32 C100 C101 C105 C108 C109 C120 C125 |    12 | 0.1µF 16V X5R Ceramic Capacitor 0402 Taiyo Yuden EMK105BJ104MV-F        |
| C2 C11                                               |     2 | 4.7nF 50V X7R Ceramic Capacitor 0402 Murata GRM155R71H472KA01B          |
| C5                                                   |     1 | 1nF 50V X7R Ceramic Capacitor 0402 Murata GRM155R71H102KA01B            |
| C6 C7 C9 C10 C24 C25                                 |     6 | Ceramic Capacitor 0402 Not Installed                                    |
| C8                                                   |     1 | Ceramic Capacitor 0603 Not Installed                                    |
| C12 C17 C18                                          |     3 | 10µF 6.3V X5R Ceramic Capacitor 0603 TDK C1608X5R0J106KT                |
| C13 C15 C19 C20                                      |     4 | 22µF 6.3V X7R Ceramic Capacitor 0805 Taiyo Yuden JMK212BJ226MG-T        |
| C14 C28-30 C35-38 C115 C116 C126                     |    11 | 1µF 10V X5R Ceramic Capacitor 0402 Taiyo Yuden LMK105BJ05KV             |
| C22                                                  |     1 | 1µF 10V X5R Ceramic Capacitor 0402 Taiyo Yuden EMK107BJ105MK-T          |
| C23                                                  |     1 | Ceramic Capacitor 1206 Not installed                                    |
| C26                                                  |     1 | 100µF 6.3V Tantalum Capacitor 1210 AVX TCJB107M006R0070                 |
| C27                                                  |     1 | Tantalum Capacitor 1210 Not installed                                   |
| C31                                                  |     1 | 10nF X7R 50V Ceramic Capacitor 0402 Taiyo Yuden UMK105BJ103KV-F         |
| C102 C103                                            |     2 | 8pF ±0.5pF 50V C0H Ceramic Capacitor 0402 Taiyo Yuden UMK105CH080DV     |
| C104                                                 |     1 | 4.7µF 16V X5R Ceramic Capacitor 0603 Taiyo Yuden EMK107ABJ475KA         |
| C106                                                 |     1 | 0.033µF ±10% 25V X7R Ceramic Capacitor 0402 TDK C1005X7R1E333K          |
| C127                                                 |     1 | 0.47µF ±10% 6.3V X7R Ceramic Capacitor 0603 Taiyo Yuden JMK107BJ474KA-T |
| R1                                                   |     1 | 24.9kΩ SMT Resistor 0402 Vishay CRCW040224K9FK                          |
| R2                                                   |     1 | 49.9Ω SMT Resistor 0603 Yageo RC0603FR-0749R9L                          |
| R3 R8 R9                                             |     3 | 470Ω SMT Resistor 0402 Vishay, CRCW0402470RFK                           |
| R4 R7 R10                                            |     3 | 10kΩ SMT Resistor 0402 Panasonic ERJ-2RKF1002                           |

Evaluates: MAX8973A

## MAX8973A EV Kit Bill of Materials (continued)

| PART                          |   QTY | DESCRIPTION                                        |
|-------------------------------|-------|----------------------------------------------------|
| R5 R6 R27-29 R31 R35 R36 R111 |     9 | 100kΩ 1% SMT Resistor 0402 Yageo RC0402FR-07100KL  |
| R11                           |     1 | 1MΩ SMT Resistor 0402 Vishay CRCW04021M00JN        |
| R12 R24 R25                   |     3 | SMT Resistor 0402 Not Installed                    |
| R13 R14                       |     2 | SMT Resistor 0402 Not Installed (PCB SHORT)        |
| R15 R16                       |     2 | 1kΩ SMT Resistor 0402 Stackpole RMCF0402FT1K00     |
| R17 R18 R26                   |     3 | 20.5kΩ SMT Resistor 0402 Vishay CRCW040220K5FK     |
| R19                           |     1 | 1kΩ SMT Resistor 0603 Vishay CRCW06031K00JN        |
| R20                           |     1 | 100mΩ SMT Resistor 2010 Vishay WSLT2010R1000DEA18  |
| R21                           |     1 | 10mΩ SMT Resistor 2512 Vishay WSLP2512R0100DEA     |
| R22                           |     1 | 1Ω SMT Resistor 1206 Stackpole RNCP1206FTD1R00     |
| R23                           |     1 | 10Ω SMT Resistor 1206 Vishay CRCW120610R0FK        |
| R30                           |     1 | 169kΩ 1% SMT Resistor 0402 Panasonic ERJ-2RKF1693X |
| R32                           |     1 | 47.5kΩ 1% SMT Resistor 0402 Vishay CRCW040247K5FK  |
| R33                           |     1 | 102kΩ 1% SMT Resistor 0402 Vishay CRCW0402102KFK   |
| R34                           |     1 | 105kΩ 1% SMT Resistor 0402 Panasonic ERJ-2RKF1053  |
| R103 R123                     |     2 | 27Ω SMT Resistor 0402 Vishay CRCW040227R0JN        |
| R108 R109                     |     2 | 100Ω SMT Resistor 0402 Panasonic ERJ-2RKF1000      |
| R110                          |     1 | 220Ω SMT Resistor 0402 Vishay, CRCW0402220RJN      |
| R117                          |     1 | 0Ω SMT Resistor 0402 Yageo RC0402JR-070RL          |
| R119 R120                     |     2 | 1.5kΩ SMT Resistor 0402 Panasonic ERJ-2GEJ152      |
| R121                          |     1 | 0Ω SMT Resistor 0603 Yageo RC0603JR-070RL          |

## MAX8973A Evaluation Kit

## MAX8973A EV Kit Bill of Materials (continued)

| PART        |   QTY | DESCRIPTION                                                    |
|-------------|-------|----------------------------------------------------------------|
| R122        |     1 | 1MΩ SMT Resistor 0603 Vishay CRCW06031M00JN                    |
| L4 L5 L6    |     3 | 680nH Shielded 3.9A 31mΩ (max) 2520 Murata DFE252012F-R68M     |
| FB100       |     1 | Ferrite Bead SMT 0603 Murata BLM18PG221SN1                     |
| D1 D101     |     2 | LED Red 0603 LITE-ON LTST-C190CKT                              |
| D100 D102   |     2 | LED Yellow 0603 LITE-ON LTST-C190YKT                           |
| Y101        |     1 | Crystal 16MHz 3.2mm x 2.5mm Kyocera CX3225SB16000D0FLJZZ       |
| Q1          |     1 | Power MOSFET D2PAK International Rectifier IRF3704ZS           |
| Q2          |     1 | N CH Power Trench MOSFET SO-8 Fairchild FDS6574A               |
| Q3          |     1 | Dual N-CH Power Trench MOSFET SO-8 Fairchild FDS6898A          |
| Q4          |     1 | N-Ch Enhancement Mode FET SOT23 Fairchild 2N7002ET1G           |
| U2          |     1 | Dual OpAmp SO-8 Maxim MAX4092ASA                               |
| U3          |     1 | Resistor Programmable Temperature Switch Maxim MAX6509HAUK-T   |
| U4          |     1 | Analog Multiplexers TQFN 16-pin 3mm x 3mm Maxim MAX4899AEETE+  |
| U6          |     1 | IC TDFN 8-pin Not Installed                                    |
| U7          |     1 | 4x7 0.4mm Pitch WLP Maxim MAX8973AEWI+                         |
| U13         |     1 | 4-Channel Low Power DACs TSSOP-14 Maxim MAX5815AAUD+           |
| U15         |     1 | General Purpose GPIO Expanders QFN-UT-20 Semtech SX1502IO87TRT |
| U17 U20 U21 |     3 | Adjustable Voltage Low Noise LDO SC70-5 Maxim MAX8512EXK+T     |
| U18         |     1 | USB to Serial UART Interface TQFN5X5-32L FTDI FT232RQ          |
| U100        |     1 | Microcontroller TQFN-56 Maxim MAXQ2000-RBX+                    |
| U107        |     1 | Level Translator QFN 4X4-12L Maxim MAX3395EETC+                |

│

Evaluates: MAX8973A

## MAX8973A EV Kit Bill of Materials (continued)

| PART                                                                       |   QTY | DESCRIPTION                                                                                                  |
|----------------------------------------------------------------------------|-------|--------------------------------------------------------------------------------------------------------------|
| J2                                                                         |     1 | Micro B Receptacle SMD Type Amphenol 10118192-0001LF                                                         |
| J3                                                                         |     1 | BNC RF Connector Amphenol 112404                                                                             |
| JU1-3 JU6-10                                                               |     8 | 3 Pin Header 0.1'                                                                                            |
| JU13 J14                                                                   |     2 | 2 Pin Header 0.1'                                                                                            |
| GND VIN1                                                                   |     2 | Machine Screw, Thumbscrew, Banana, 1/4-32IN, 11/32IN, Nickel Plated Brass Emerson Network Power 111-2223-001 |
| GNDS                                                                       |     1 | Test Point Big, Black Keystone 5011 (Digikey Part Number 5011K-ND)                                           |
| VCC VINS VOUTS                                                             |     3 | Test Point Small, Red Keystone 5000 (Digikey Part Number 5000K-ND)                                           |
| IOUT                                                                       |     1 | Test Point Small Not Installed                                                                               |
| P01-07                                                                     |     7 | Test Point Via Do Not Stuff                                                                                  |
| BIASEN CS DVS EN GND5 GND7-9 MISO SCL/SCLK SDA/MOSI VDD-IN VIN VOUT+ VOUT- |    15 | Maxim Loop                                                                                                   |
| -                                                                          |     1 | PCB: MAX8973A EVKIT                                                                                          |

│

## MAX8973A EV Kit Schematics

Figure 6. EV Kit Schematic-Sheet 1 of 5

<!-- image -->

│

## MAX8973A EV Kit Schematics (continued)

Figure 7. EV Kit Schematic-Sheet 2 of 5

<!-- image -->

## MAX8973A EV Kit Schematics (continued)

Figure 8. EV Kit Schematic-Sheet 3 of 5

<!-- image -->

│

## MAX8973A EV Kit Schematics (continued)

Figure 9. EV Kit Schematic-Sheet 4 of 5

<!-- image -->

│

## MAX8973A EV Kit Schematics (continued)

Figure 10. EV Kit Schematic-Sheet 5 of 5

<!-- image -->

## MAX8973A EV Kit PCB Layouts

Figure 11. EV Kit Layout-Assembly Top

<!-- image -->

Figure 12. EV Kit Layout-Assembly Bottom

<!-- image -->

Figure 13. EV Kit Layout-Top Layer

<!-- image -->

Figure 14. EV Kit Layout-Inner 2nd Layer

<!-- image -->

│

## MAX8973A EV Kit PCB Layouts (continued)

Figure 15. EV Kit Layout-Inner 3rd Layer

<!-- image -->

Figure 16. EV Kit Layout-Bottom Layer

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                  | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------|-----------------|
|                 0 | 3/20            | Initial release                              | -               |
|                 1 | 4/20            | Corrected typo in Ordering Information table | 7               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX8973A