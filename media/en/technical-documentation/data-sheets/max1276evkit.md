<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX1276 Evaluation Kit/Evaluation System

## General Description

The MAX1276 evaluation kit (EV kit) consists of an assembled board that can be used with a logic analyzer for high-speed evaluation of the MAX1276 family of devices at conversion rates up to 1.8Msps. The MAX1276 EV kit can be used together with a Maxim 68HC16MODULEDIP microcontroller (µC) module for a complete MAX1276 200ksps evaluation system (EV system). Windows ® 98/ME/XP software provides a convenient user interface to  exercise the MAX1276 and other 5V family members (see Table 4). When used with a logic analyzer, the EV kit can be used to evaluate any of the following parts; MAX1070/MAX1071/MAX1072/MAX1075-MAX1079/ MAX1224/MAX1225/MAX1274-MAX1279, by replacing the MAX1276 with the desired device.

Order the EV kit (MAX1276EVKIT) for use with a logic analyzer or if the 68HC16MODULE-DIP has been purchased with a previous Maxim EV system. Order the complete MAX1276 EV system (MAX1276EVC16) to receive both the MAX1276 EV kit and 68HC16 boards for use with a personal computer.

To evaluate other members of the family, request a free sample and see the Evaluating Other Devices section for instructions.

| DESIGNATION                          |   QTY | DESCRIPTION                                                                        |
|--------------------------------------|-------|------------------------------------------------------------------------------------|
| C1                                   |     1 | 1nF, 50V C0G capacitor (0603) TDK C1608C0G1H102J or equivalent                     |
| C2                                   |     0 | Not installed (0603)                                                               |
| C3, C6, C9                           |     3 | 0.01µF ±10%, 16V ceramic capacitors (0402) Taiyo Yuden EMK105BJ103KV or equivalent |
| C4, C7, C10, C12, C16, C18, C22, C24 |     8 | 0.1µF ±10%, 10V ceramic capacitors (0402) TDK C1005X5R1A104K or equivalent         |
| C5                                   |     1 | 4.7µF ±10%, 6.3V ceramic capacitor (0805) TDK 2012X5R0J475K or equivalent          |
| C8, C11, C13, C14, C19, C25          |     6 | 10µF ±10%, 6.3V ceramic capacitors (0805) TDK 2012X5R0J106M or equivalent          |
| C15, C20                             |     2 | 100pF ±10% ceramic capacitors (0603) TDK C1608C0G1H101K or equivalent              |

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- ♦ Proven PC-Board Layout
- ♦ Complete EV System
- ♦ On-Board Buffers
- ♦ Data-Logging Software
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | INTERFACE TYPE   |
|--------------|------------------|------------------|
| MAX1276EVKIT | User supplied    | 0°C to +70°C     |
| MAX1276EVC16 | Windows software | 0°C to +70°C     |

Note: The MAX1276 software is designed for use with the complete MAX1276EVC16 EV system. (It includes the 68HC16MODULE-DIP and the MAX1276EVKIT). The MAX1276EVKIT board can be purchased separately for use with a logic analyzer or other µCs.

## MAX1276 EV System Component List

| PART             |   QTY | DESCRIPTION      |
|------------------|-------|------------------|
| MAX1276EVKIT     |     1 | MAX1276 EV kit   |
| 68HC16MODULE-DIP |     1 | 68HC16 µC module |

## MAX1276 EV Kit Component List

| DESIGNATION       |   QTY | DESCRIPTION                                                              |
|-------------------|-------|--------------------------------------------------------------------------|
| C17, C23, C29-C32 |     6 | 10µF, 10V ceramic capacitors (1210) TDK C3225X5R1A106M or equivalent     |
| C21               |     1 | 1µF ±10%, 6.3V ceramic capacitor (0603) TDK C1608X5R0J105K or equivalent |
| JU1, JU3          |     2 | 3-pin jumpers                                                            |
| JU2               |     1 | 4-pin jumper                                                             |
| JU4               |     1 | 2 x 3-pin jumper                                                         |
| JU5, JU6          |     2 | 2-pin jumpers                                                            |
| P1                |     1 | 2 x 4 connector                                                          |
| P2                |     1 | 2 x 20 right-angle socket                                                |
| R1, R2, R8        |     3 | 12 Ω ±5% resistors (0805)                                                |
| R3-R6             |     4 | 10k Ω ±5% resistors (0805)                                               |
| R7                |     1 | 100 Ω ±5% resistor (0805)                                                |
| R12-R15, R17-R20  |     8 | 1k Ω ±1% resistors (0805)                                                |
| R16               |     1 | 53.6 Ω ±1%, 0.5W resistor (2010)                                         |

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

Features

## MAX1276 Evaluation Kit/Evaluation System

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                           |
|---------------|-------|---------------------------------------|
| ACIN          |     1 | SMA connector                         |
| U1            |     1 | MAX1276ETC (12-pin TQFN)              |
| U2, U3        |     2 | MAX4430ESA (8-pin SO)                 |
| U4            |     1 | Texas Instruments SN74LVC1G08DBVR     |
| FB1           |     1 | Ferrite bead (0805) Murata BLM21A102S |
| FB2           |     1 | 0 Ω resistor (0805)                   |
| -             |     7 | Shunts                                |
| -             |     1 | CD-ROM with MAX1276 EV kit software   |
| -             |     1 | MAX1276 EV kit PC board               |

## MAX1276 Stand-Alone EV Kit

The MAX1276EVKIT provides a proven PC-board layout facilitating evaluation of the MAX1276. It must be connected to appropriate power supplies and timing signals for proper operation. For standard evaluations, DC supplies are required for the AVDD, VLOGIC, +7V, and -3V power inputs. Depending on the intended application  and  option  settings,  AVDD  and VLOGIC supplies can be shared and the +7V and -3V supplies are only required if the on-board buffer circuitry is to be utilized. Additional supplies and references may be needed to accommodate optional input configurations. Connector P1 provides a convenient connection for a logic analyzer or other user system. Refer to the data sheet of the part being evaluated for timing requirements.

## MAX1276 EV System

The MAX1276EVC16 EV system connects to an IBMcompatible PC running Windows 98/ME/XP. The evaluation  system connects to the PC's serial communications port. See the Quick Start Using the MAX1276 EV System section for setup and operating instructions.

## Quick Start Using a Logic Analyzer

## Required Equipment

To use the MAX1276EVKIT with a logic analyzer, the following equipment is needed:

- Power supplies for the MAX1276EVKIT
- 1) VDD DC supply (5.0V for the MAX1276)
- 2) VLOGIC DC supply (1.8V to VDD)
- 3) +7.0V positive supply buffer
- 4) -3.0V negative supply buffer
- 5) AC input (4.096VP-P for the MAX1276)
- 6) DC supplies for common-mode voltages (2.048V for the MAX1276)
- Logic analyzer and digital waveform generator or µC system with SPI™ capabilities
- Deserializer board (optional). A deserializer board can be fitted to the EV kit for use with a parallel logic-analyzer interface. Be sure the selected circuitry supports the intended operating speed of the device under test (DUT). See the Deserializer Board (Optional) section for a proven design example.

## Procedure

Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Set jumpers JU1-JU6 according to Table 1 for the MAX1276, or use Tables 3, 4, and 5 to select the jumper configuration for other devices. It is highly recommended that the shunts for JU1 and JU2 be removed until the DUT and buffers are fully powered and input levels have been verified to avoid possible damage to the test device if pins are taken above the VDD supply or below ground. See the InputSignal Setup Procedure section for a description of the possible input options.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX1276 when contacting these component suppliers.

SPI is a trademark of Motorola, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1276 Evaluation Kit/Evaluation System

- 2) Connect and apply the power supplies as shown in Table 2 for the MAX1276 or as shown in Table 4 for other the devices.
- 3) Connect the logic analyzer or µC system to the SPI signals available (CONVST, DOUT, and SCLK) on connector P1. Refer to the device data sheet for timing information.
- 4) Connect and apply power to buffer circuitry (if used) and see the Input-Signal Setup Procedure section. An oscilloscope should be used to verify the analog input levels before installing the shunts on JU1 and JU2.
- 5) Enable the logic analyzer.

## Table 1. Default Jumper Configuration (MAX1276)

| JUMPER   | SETTING   | CONNECTION                                             |
|----------|-----------|--------------------------------------------------------|
| JU1      | 2-3       | AIN+ connected to output of positive input buffer (U2) |
| JU2      | 1-3       | AIN- connected to ground                               |
| JU3      | 1-2       | VREF connected to VREF I/O pad                         |
| JU4      | 1-3       | Input of positive input buffer (U2) connected to ACIN  |
| JU4      | 4-6       | Input of negative input buffer (U3) grounded           |
| JU5      | Shorted   | VLOG pin connected to VLOGIC pad                       |
| JU6      | Shorted   | VDD pin connected to VDD pad                           |

<!-- image -->

A voltmeter can be used to monitor DC input levels at the AIN+ SENSE and AIN- SENSE pads. The reference value seen by the part can be monitored at the VREF SENSE pad. These pads have an isolation resistor to prevent noise being injected by the voltmeter and are useful for verification of DC measurements. When monitoring voltages through the SENSE pads, be sure to set the voltmeter to high-impedance mode, as current drawn through the isolation resistors can cause measurement errors.

Table 2. Default Input Voltages

| PAD    | SUPPLY                        | VOLTAGE                                               |
|--------|-------------------------------|-------------------------------------------------------|
| VDD    | VDD supply                    | +5.0V                                                 |
| VLOGIC | VLOG supply                   | +5.0V                                                 |
| VREF   | VREF                          | No connection (output)                                |
| +7V    | Positive supply for U2 and U3 | +7.0V                                                 |
| -3V    | Negative supply for U2 and U3 | -3.0V                                                 |
| AGND   | Analog ground                 | Ground for analog circuits                            |
| DGND   | Digital ground                | Ground for digital circuits                           |
| CMP    | AIN+ common- mode voltage     | 2.048V or desired common-mode voltage                 |
| CMM    | AIN- common-mode voltage      | No connection required, connected to AGND through R20 |
| ACIN   | AC input                      | 4.096V P-P                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

## Table 3. Jumper Functions and Options

Figure 1. Jumper Locations

| JUMPER   | SELECTION   | FUNCTION                                        |
|----------|-------------|-------------------------------------------------|
| JU1      | 1-2         | AIN+ connected to AIN+ pad (unbuffered)         |
| JU1      | 2-3         | AIN+ connected to output of U2 (buffered)       |
| JU2      | 1-2         | AIN- connected to output of U3 (buffered)       |
| JU2      | 1-3         | AIN- connected to ground (unbuffered)           |
| JU2      | 1-4         | AIN- connected to AIN- pad (unbuffered)         |
| JU3      | 1-2         | VREF connected to VREF I/O pad                  |
| JU3      | 2-3         | VREF connected to VDD (external reference only) |
| JU4      | 1-3         | AC input of U2 connected to ACIN                |
| JU4      | 3-5         | AC input of U2 connected to GND                 |
| JU4      | 2-4         | AC input of U3 connected to ACIN                |
| JU4      | 4-6         | AC input of U3 connected to GND                 |
| JU5      | Shorted     | VL pin connected to VLOGIC pad                  |
| JU5      | Open        | External ammeter connection                     |
| JU6      | Shorted     | VDD pin connected to VDD pad                    |
| JU6      | Open        | External ammeter connection                     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1276 Evaluation Kit/Evaluation System

## Recommended Equipment

The following list of equipment has been successfully used with the MAX1276 EV kit in evaluation and testing. It is by no means exhaustive, but is offered as a starting point  for  setting  up  a  working  evaluation  bench  using the MAX1276 family of parts.

## Master Clock Generator

The master clock generator is used to supply a master clock reference to digital signal generators or other programmable devices supplying the SPI interface signals to  the  DUT. Frequency resolution, stability, and low jitter/phase noise are of primary importance in this application. HP/Agilent 8662A (or equivalent updates) and Rhode Schwarz SML01 (option B1) have both been found to provide adequate performance in this regard.

## Input Signal Generator

The input signal generator must be able to provide precise frequency control and resolution for reliable singletone measurements. For most linearity and dynamic measurement techniques, the input signal must be synchronized with the master clock and its derivative SPI signals. Thus, the master clock and input sources must be able to share a time-base reference. Fine frequency resolution is also required to maintain coherency. HP/Agilent 8662A and Stanford Research DS345, combined with additional filters, have been used successfully with the MAX1276 EV kit.

## Input Signal Filters

Most signal generators do not have the tonal purity (&gt; 12 bits) required to show the full performance capabilities of the MAX1276 family. Bandpass filters such as those manufactured by Allen Avionics, Inc. are well suited for this use.

## Digital Pattern Generator

A digital pattern generator provides a flexible means of deriving the required SPI signals for the DUT as well as any interface signals required for the use of a logic analyzer or deserializer. The pattern generator should be able to accept an external master clock input for proper synchronization. A Sony/Tektronics DG2020A or equivalent is sufficient.

## Logic Analyzer

There are several logic analyzers suitable for use with the MAX1276 EV kit. Primary concerns are the ease of configuration, sufficient memory depth, and operating speed. An HP/Agilent 1673G is a good example of a suitable logic analyzer.

<!-- image -->

## Precision-Voltage Sources

These sources can be used to provide precision DC voltages to the DUT for use as external references, DC inputs,  or  common-mode levels. Datel/Calibrators Inc. DVC-8500  is  a  good  example  of  a  precision voltage source.

## Voltage Supply Sources

A wide array of suitable supply sources is available. HP/Agilent E3620A or E3631A are two examples.

## Quick Start Using the MAX1276 EV System

## MAX1276 EV Kit Program Files

| FILE          | DESCRIPTION                                                                                                                                                                 |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX1276.EXE   | Application program that runs under Windows                                                                                                                                 |
| MAX1276.HLP   | Help file                                                                                                                                                                   |
| KIT1276.C16   | Binary code downloaded into 68HC16 µC                                                                                                                                       |
| KIT1276.ASM   | Main source code for the KIT1276.C16 program, provided for reference. Maxim holds the copyright but allows customers to adapt the program for their own use without charge. |
| INSTALL.EXE   | Installs the EV kit files on your computer                                                                                                                                  |
| UNINST.INI    | Database for uninstall program                                                                                                                                              |
| UNINSTALL.EXE | Removes the EV kit files from your computer. This is automatically copied to C:\WINDOWS during installation.                                                                |

## Required Equipment

The MAX1276EVC16 EV system includes both the MAX1276EVKit board and a 68HC16 µC module. Together, they can be used to evaluate parts operating with 5V power supplies at conversion rates up to 200ksps. To use the MAX1276 EV kit with the Maxim 68HC16 module, the following equipment is needed:

- Maxim MAX1276EVC16 (contains MAX1276EVKIT and 68HC16MODULE-DIP)
- DC power supply for the 68HC16 module. This can be a small wall cube (7.5V to 20V, 0.25A), or a 9V battery.
- Personal computer running Windows 98/ME/XP
- Spare 9-pin serial-communications port on the personal computer
- Serial cable to connect the computer's serial port to the 68HC16 module

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

## Table 4. Supplies for Optional Devices and Allowed Reference Jumper Settings

|   RESOLUTION (BITS) | JU3    | REFERENCE VOLTAGE (V)   | V DD SUPPLY (V)   | OUTPUT CODING   | DEVICE   |
|---------------------|--------|-------------------------|-------------------|-----------------|----------|
|                  10 | 1-2 or | External 0 to VDD       | 2.7 to 3.6        | Unipolar        | MAX1070  |
|                  10 | 1-2 or | External 0 to VDD       | 2.7 to 3.6        | Bipolar         | MAX1071  |
|                  10 | 2-3    | External 0 to VDD       | 4.5 to 5.25       | Unipolar        | MAX1072  |
|                  10 | 1-2 or | External 0 to VDD       | 4.5 to 5.25       | Bipolar         | MAX1075  |
|                     | 1-2    | Internal 2.048          | 2.7 to 3.6        | Unipolar        | MAX1077  |
|                     | 1-2    | Internal 2.048          | 2.7 to 3.6        | Bipolar         | MAX1079  |
|                     | 1-2    | Internal 4.096          | 4.5 to 5.25       | Unipolar        | MAX1076  |
|                     | 1-2    | Internal 4.096          | 4.5 to 5.25       | Bipolar         | MAX1078  |
|                  12 | 1-2 or | External 0 to VDD       | 2.7 to 3.6        | Unipolar        | MAX1224  |
|                  12 | 1-2 or | External 0 to VDD       | 2.7 to 3.6        | Bipolar         | MAX1225  |
|                  12 | 2-3    | External 0 to VDD       | 4.5 to 5.25       | Unipolar        | MAX1274  |
|                  12 | 1-2 or | External 0 to VDD       | 4.5 to 5.25       | Bipolar         | MAX1275  |
|                     | 1-2    | Internal 2.048          | 2.7 to 3.6        | Unipolar        | MAX1277  |
|                     | 1-2    | Internal 2.048          | 2.7 to 3.6        | Bipolar         | MAX1279  |
|                     | 1-2    | Internal 4.096          | 4.5 to 5.25       | Unipolar        | MAX1276  |
|                     | 1-2    | Internal 4.096          | 4.5 to 5.25       | Bipolar         | MAX1278  |

- Power supplies for the MAX1276EVKIT:
- 1) +5.0V VDD supply
- 2) +5.0V VLOGIC supply
- 3) +7.0V positive supply buffer
- 4) -3.0V negative supply buffer
- 5) 4.096VP-P AC input
- 6) 2.048V DC supply for common-mode voltage

## Procedure

Follow the steps below to verify board operation.

- 1) Carefully connect the boards by aligning the 40-pin header of the MAX1276EVKIT with the 40-pin connector of the 68HC16 (µC) module. Gently press them together. The two boards should be flush against one another.
- 2) It  is  highly  recommended that shunts for JU1 and JU2 be removed until the test device and buffers are fully powered and input levels have been verified to avoid possible damage to the test device if pins are taken above the VDD supply or below ground. See the Input-Signal Setup Procedure section for a description of the possible input options.

6

- 3) Set jumpers JU3-JU6 as shown in Table 1.
- 4) Connect the 7.5V to 20V DC power source to the µC module at the terminal block located next to the ON/OFF switch, along the top edge of the µC module. Observe the polarity marked on the board.
- 5) Connect the power supplies for the MAX1276EVKIT (see Table 2).
- 6) Connect the serial cable from the computer's serial port to the µC module.
- 7) Install the MAX1276 EV kit software on the personal computer by running the INSTALL.EXE program on the CD-ROM disk. The program files are copied and icons are added to the Windows start menu.
- 8) Start  the  MAX1276 program by clicking its icon in the Start menu.
- 9) The program prompts the user to connect the µC module and turn on its power supply. Slide SW1 to the ON position and turn on the power supplies for the MAX1276EVKIT board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

- 10) Return to the program and select the correct serial port or leave the automatic board detection option enabled, then click OK. The EV kit software checks the  serial-port  status  lines  to  confirm  that  the  correct  port  has  been  selected. When the program detects the 68HC16 module, the code contained in KIT1276.C16 is automatically downloaded to the module.
- 11) Apply the input signal source to the ACIN. Observe the readout on the screen. Data can also be collected and graphed by selecting Collect Samples .

## Detailed Description of Software

The main window for the MAX1276 EV system software controls the MAX1276EVKIT board and displays conversion results (see Figure 2). Trigger the real-time readings display by pressing Single Reading or  by checking the Read Every 200ms option. To collect a stream of samples and graph the data, click on the Collect Samples button.

The Device Output section displays the test device output code in hex and decimal format. The displayed voltage reading is calculated from the device output code and the reference voltage in the Device Parameters section. There are also options to take single readings or to automatically display a new reading every 200ms. The clock rate used for these readings is determined by the setting in the Clock Divider window found in the SPI Parameters section. The Collect Samples button opens a dialog box to collect and graph output readings or to record readings to a disk file.

The SPI Parameters section sets the timing parameters  used by the 68HC16's serial peripheral interface (SPI). The SPBR register, that controls the SPI clock frequency, has a range of 2 to 255 and yields clock frequencies between 33kHz and 4.19MHz. The DTL register,  which controls the delay between conversion cycles, has a range of 0 to 255 for delays between 1µs and 487µs. Timing values are displayed along with the total  conversion time and sample rate. To observe

<!-- image -->

Figure 2. MAX1276 EV Kit Main Screen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

Figure 3. Sampling Tool Dialog box

<!-- image -->

these values with an oscilloscope, check the Run SPI Continuously box and monitor the SPI signals on the test points located near header P1. The Clock Divider setting  sets  the  SPI  clock  rate  for  all  readings  taken. The total conversion rate (SPI clock and delay between conversions)  take  effect  when  the Run  SPI Continuously box is checked or when collecting data for graphing.

The Device Parameters section configures the Maxim evaluation software for the various devices. Selecting a Test Device in the drop-down list box sets the resolution (10 bits or 12 bits) and output coding (unipolar or bipolar). The operating parameters are displayed below the selection box. The displayed reference voltage can be set to the measured value of VREF for more accurate readings. The following formulas are used to calculate the displayed Output Voltage .

Unipolar Mode:

Output Voltage = Output Code x (VREF / Max Code) Bipolar Mode:

If sign bit (MSB) is zero:

Output Voltage = Output Code x (VREF / Max Code) If sign bit is one:

Output Voltage = (Output Code - Max Code) x (VREF / Max Code)

where Max Code = 4096 for 12-bit resolution or 1024 for 10-bit resolution.

The displayed output voltage ranges from 0 to 4.095V in  unipolar  mode and -2.048V to +2.047V in bipolar mode (assuming a 12-bit ADC with VREF = 4.096V). Refer to the device data sheet for more detail on the difference between unipolar and bipolar output coding.

The Device Power State section displays the present power state of the MAX1276. The MAX1276 has three levels of power consumption. During normal operation, the device is in the active state. Pressing the Power Down button sends a short 8-bit conversion sequence to the device, setting it the standby state. In this state, power consumption is reduced, but the device is ready for  immediate use. Pressing the Power Down button while the device is in the standby state sends a second 8-bit conversion cycle to set the device in the low-power state. The device requires 2ms to 5ms settling time when coming out of the low-power state. Any normal conversion cycle brings the device back to the active state. Therefore,  the Read Every 200ms box  must  be unchecked to power down the device. The supply currents for VLOGIC and AVDD can be measured by replacing the shunts across JU5 and JU6 with ammeters.

## Displaying and Saving Data

Pressing the Collect Samples button opens a dialog box for the Maxim sampling tool (see Figure 3). Here, the user can select the number of samples (1, 2, 4, 4096, 8192 etc.,) to be collected. A box is also provided to enter a label for the graph. Clicking the Begin Sampling button starts the data collection and opens a display window showing the collected data (see Figure 4).

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

Figure 4. Sampled Data Graph

<!-- image -->

The collected data is drawn as a time-based graph. Buttons are available to change to a histogram or table presentation. The data can also be saved to a disk file. More information about the graphing output options can be found by using the MAX1276 EV kit help feature.

## Input-Signal Setup Procedure

The analog input configuration jumpers on the EV kit can be used to realize a variety of input options for both AC and DC analysis. Users should determine which member of the MAX1276 family best matches their requirements and replace the MAX1276 with the appropriate device. Be sure to set the jumpers accordingly. Note: Use of the term single-ended in the descriptions below indicates that only one of the two inputs has an AC signal applied. The MAX1276 family converts the differential voltage (AIN+ - AIN-) in all modes of operation.

Recall that the MAX1276 only supports inputs between VDD and ground. Most AC signal generators are ACcoupled (i.e., the output is centered at ground); the EV

<!-- image -->

kit  allows  users  to  shift  the  common  mode  of  the  AC inputs to the desired level by applying a voltage to the CMP/CMM pads. It is recommended that users initially set up active analog inputs using the following procedure. Failure to do so may result in damage to the DUT or  on-board/external buffers if input levels exceed the supplies and the test device's internal protection devices are activated.

- 1) Set the JU4 configuration jumpers as desired, leaving JU1 and JU2 open.
- 2) Apply power to the on-board buffer supplies (+7V, -3V).
- 3) Apply DC common-mode inputs as required and verify setting(s) on JU1 and JU2.
- 4) Apply AC signal if required to ACIN and verify correct level(s) on JU1 and JU2.
- 5) Install JU1 and JU2 shunts, applying the buffer outputs to the inputs of the powered DUT.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX1276 Evaluation Kit/Evaluation System

## Buffered DC Operation

The EV kit can be readily configured to evaluate the DC performance of the DUT using the on-board buffer circuitry.  In  this  configuration,  no  ACIN signal is required and the DC common-mode pads CMP/CMM can be used to apply arbitrary DC voltages to the test device. When evaluating unipolar parts, a direct ground connection is also supported for AIN-. When performing DC evaluations of the test device, be sure to verify the levels actually present at the device inputs using the supplied AIN+ and AIN- SENSE pads. When monitoring voltages through the SENSE pads, be sure to set the voltmeter to high-impedance mode, as current drawn through the isolation resistors can cause measurement errors.

The MAX1276 family requires the following conditions for accurate operation:

- VREF &gt; (AIN+ - AIN-) &gt; 0 for unipolar parts.
- VREF / 2 &gt; (AIN+ - AIN-) &gt; - VREF / 2 for bipolar parts.
- VDD &gt; AIN+ &gt; 0 and VDD &gt; AIN- &gt; 0 for all parts.

## Unipolar AC Operation

Unipolar AC operation can be realized in both singleended and fully differential modes. For single-ended mode, ACIN is supplied to either buffer U2 or U3, with the other buffer AC input connected to ground. A special  case  of  unipolar  single-ended operation can be realized with AIN- connected directly to ground. For differential  operation,  ACIN is supplied to both buffers along with selected common modes to realize the waveforms shown in case UD of Figure 5.

DC common mode(s) CMP and CMM should be selected such that:

<!-- formula-not-decoded -->

Note that input settings where (AIN+ &lt; AIN-) produce zero code outputs for unipolar parts. Figure 5 shows three possible waveforms for proper unipolar operation. All  three  are  phased  so  that  the  resulting  differential input (and converted output) for each waveform pair are equivalent.

## Bipolar AC Operation

Bipolar AC operation can be achieved in both singleended and fully differential modes. For single-ended mode, ACIN is supplied to either buffer U2 or U3, with the other buffer's AC input connected to ground. For fully  differential  operation,  ACIN  is  supplied  to  both buffers along with selected common modes to produce the waveforms shown in case BD of Figure 6.

DC common mode(s) CMP and CMM should be selected such that:

<!-- formula-not-decoded -->

Figure 6 shows three possible waveforms for proper bipolar operation. All three are phased so that the resulting differential  input  (and  converted output) for each waveform pair are equivalent.

## Direct-Drive Operation

In addition to providing on-board buffering for the test device inputs, the EV kit also provides pads for direct connection of external sources to the ADC inputs. Before using these options, read about the input buffers in the Detailed Description of Hardware section. The direct-drive option is intended for use with external sources capable of adequately driving the MAX1276 input section. In most cases, peak performance requires the use of the on-board or similar external buffers when evaluating both AC and DC performance.

## Reference Setup Procedure

The MAX1276 EV kit provides several options for supplying and monitoring reference voltages to and from the MAX1276 family of devices. For all options, users should monitor the actual reference value appearing at the  test  device  through  the  VREF\_SENSE  and RGND\_SENSE pads. When monitoring voltages through the SENSE pins, be sure to use a high-impedance voltmeter. Also, be sure to select a mode of operation compatible with your selection of ADC.

## Internal Reference Operation (Default)

In  this  mode of operation, parts with internal references can be easily evaluated. The internal reference output level is made available at the VREF pad. If a user wishes to use the internal reference level to drive additional circuitry, be sure to consult the MAX1276 family data sheets to ensure that the internal reference specifications for current capability and load regulation are considered. When used externally, most dynamic applications require that the VREF output be actively buffered to prevent interference with the operation of the ADC circuitry.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1276 Evaluation Kit/Evaluation System

## External Reference Operation (Default)

In this mode of operation, members of the device family requiring an external reference can be evaluated by direct connection of an external source through the VREF pad. Sufficient decoupling is included on the board so most external sources or references should be able to adequately supply the requirements of the ADC. Be sure to verify the level at the pins of the test device using the VREF\_SENSE and RGND\_SENSE pads.

## External Reference Operation with VDD Reference

In this mode of operation, parts with an external reference input are evaluated by supplying the positive supply (VDD) directly to the part's reference input. The VREF pad is not connected, but the VREF\_SENSE and RGND\_SENSE pads remain valid.

## Detailed Description of Hardware

The MAX1276EVKIT was designed to demonstrate the full  capabilities of the MAX1276 family of devices. The board comes supplied with components and options selected for proven performance. Additionally, the EV kit  allows for extensive user customization. These custom options allow customers to configure the board in several different ways to evaluate potential tradeoffs in performance. The following sections describe several such options and include application notes, which may be of interest to those wishing to design the MAX1276 family into their applications.

## Input Buffer Stage

To obtain peak performance from the MAX1276 at high sample rates, the analog inputs should be actively buffered. In selecting a buffer, it is the settling time of the buffer amplifier that is critical to observed converter performance at high speeds. This means that the input buffers need to be designed to fully settle the analog inputs during the conversion sampling interval. The bandwidth required to do so may exceed the bandwidth required to process the input-signal frequency content, thus a designer must ensure both settling bandwidth and input-signal bandwidth considerations are addressed when placing a high-speed data converter  into  a  system  context.  Refer  to  the  device  data sheet for details of the load presented by the MAX1276 family of devices and the duration of the sampling interval.  Note  that  the  sampling  interval  is  dependent  on sampling rate and clock speed.

On the MAX1276 EV kit board, U2 and U3 (MAX4430 op amps) are input amplifiers that can be configured to drive a variety of input signal levels. The AIN+ channel buffer (U2) is placed in a noninverting configuration while the AIN- channel buffer (U3) is placed in an inverting configuration. Each amplifier can be connected to the analog input (ACIN) and to DC voltages (CMP and CMM) to set input common-mode levels.

<!-- image -->

See Table 5 for information on setting the jumpers for different input configurations.

The amplifier outputs connect to the ADC input pins (AIN+ and AIN-) through lowpass filters consisting of R1,  R2,  and  input  capacitor  C1  (see  the Input Filter section).

The MAX4430 buffers are capable of fully demonstrating the performance of the MAX1276 family well above maximum Nyquist rates. These buffers should always be used when evaluating the performance of the MAX1276 family at high speeds (even with DC inputs). While the EV kit does support passive input connections through JU1 and JU2 settings, these are intended for  applications  where  external  sources/buffers are to be evaluated. Otherwise, passive operation is only recommended for low sampling rates, which allow extended sampling intervals.

## Input Filter

Analog input signals selected through JU1 and JU2 connect to the MAX1276 inputs through an input filter consisting of R1, R2, and C1. The values supplied with the EV kit were chosen for optimal performance, providing excellent stability and peak linearity. See the device data sheet for notes on source-impedance effects on ADC linearity.

The EV kit comes supplied with a single input capacitor (C1)  mounted  across  the  analog  inputs  of  the MAX1276. This arrangement typically offers the best dynamic performance in most applications. Some users may prefer or require a dual capacitor arrangement on the  analog inputs instead of the single capacitor supplied with the MAX1276 EV kit. The board layout makes it  possible  to  replace  the  single  capacitor  with  dual capacitors to ground. Figure 7 shows the preferred and alternate capacitor mounting.

Regardless of configuration, C0G-type capacitors are highly recommended in this application. C0G capacitors typically demonstrate better sample recovery characteristics  and  are  often  used  in  critical  analog  signal path applications. When designing the input stage, be sure to consider the combination of buffer amplifiers and input capacitors to achieve the desired stability, source impedance, and filtering characteristics.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

Figure 5. Valid Unipolar Waveform Examples

<!-- image -->

## Table 5. Input Signal Configurations

| INPUT MODE          | CASE (FIGURES 5 AND 6)   | ACIN MAG.   | CMP PAD   | CMM PAD   | AIN+ RANGE             | AIN- RANGE             | JU1   | JU2   | JU4      |
|---------------------|--------------------------|-------------|-----------|-----------|------------------------|------------------------|-------|-------|----------|
| DC Buffered         | -                        | N/C         | VDC+      | N/C       | VDC+ (DC)              | GND (DC)               | 2-3   | 1-3   | 3-5, 4-6 |
| DC Buffered         | -                        | N/C         | VDC+      | VDC-      | VDC+ (DC)              | VDC- (DC)              | 2-3   | 1-2   | 3-5, 4-6 |
| Unipolar Buffered   | USP (Ground)             | VREF        | VREF / 2  | N/C       | GND to VREF            | GND (DC)               | 2-3   | 1-3   | 1-3, 4-6 |
| Unipolar Buffered   | USP                      | VREF        | VREF / 2  | 0         | 0 to VREF              | 0 (DC)                 | 2-3   | 1-2   | 1-3, 4-6 |
| Unipolar Buffered   | USM                      | VREF        | VREF      | VREF / 2  | VREF (DC)              | 0 to VREF              | 2-3   | 1-2   | 3-5, 2-4 |
| Unipolar Buffered   | UD                       | VREF / 2    | 0.75 VREF | 0.25 VREF | VREF / 2 to VREF       | 0 to VREF / 2          | 2-3   | 1-2   | 1-3, 2-4 |
| Bipolar Buffered    | BSP                      | VREF        | VREF / 2  | VREF / 2  | 0 to VREF              | VREF / 2 (DC)          | 2-3   | 1-2   | 1-3, 4-6 |
| Bipolar Buffered    | BSM                      | VREF        | VREF / 2  | VREF /2   | VREF / 2 (DC)          | 0 to VREF              | 2-3   | 1-2   | 3-5, 2-4 |
| Bipolar Buffered    | BD                       | VREF / 2    | VREF / 2  | VREF /2   | -VREF / 2 to +VREF / 2 | +VREF / 2 to -VREF / 2 | 2-3   | 1-2   | 1-3, 2-4 |
| Direct-Drive Inputs | -                        | N/C         | N/C       | N/C       | Connected to AIN+ pad  | Connected to AIN- pad  | 1-2   | 1-4   | 3-5, 4-6 |

## Supply Decoupling Capacitors

Special care is also given to decoupling the MAX1276 power supplies. The capacitors are located as close as possible to the MAX1276 with their ground nodes connected to the analog ground plane (see Figure 5). The traces are as wide as possible to reduce parasitic inductance.

The EV kit includes three capacitor locations to support a wide array of decoupling capacitor choices. Three values of capacitors (10µF, 0.1µF, and 0.01µF) are used for solid decoupling over a range of clock frequencies. In most applications, a single large-value capacitor, used in parallel with a smaller high-frequency bypass capacitor, is sufficient. The high-frequency bypass capacitor should always be placed as close as possible to the MAX1276 to minimize ESL/ESR effects.

## Reference Capacitors

Reference capacitors should be afforded the same attention as supply decoupling capacitors. The capacitors  are  located as close as possible to the MAX1276

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1276 Evaluation Kit/Evaluation System

Figure 6. Valid Bipolar Waveform Examples

<!-- image -->

## Table 6. Reference Configurations

| TEST-DEVICE REFERENCE   | VREF-PAD FUNCTION   | JU3   |
|-------------------------|---------------------|-------|
| Internal                | Output              | 1-2   |
| External (VREF)         | Input               | 1-2   |
| External (VDD)          | N/C                 | 2-3   |

with  their  ground  nodes connected to the RGND pin. The traces should be made as wide as possible to minimize parasitics and the reference capacitors should be mounted as close to the ADC as possible.

At  least  4.7µF  of  capacitance is  required for internal buffer stability.  A  small-value  high-frequency bypass capacitor is also recommended.

## Digital Output Buffering

The MAX1276 is sensitive to excessive loading on the DOUT pin. In the EV kit, a high-speed low-power AND gate (U4, a SN74LVC1G08) buffers the MAX1276's DOUT from excessive loading. It is recommended that the buffered output (available on header P1 pin 7 or the DOUT pad loop) be used when connecting logic analyzers or other external loads. Direct connection to the digital  output of the test device can be accessed through P1 pin 5 for evaluating output drive strength and timing characteristics. Note: A 100 Ω series  isolation resistor and the load of the U4 input remains in the circuit when evaluating the direct connection.

## PC-Board Layout

Achieving peak performance of any high-speed data converter requires careful attention to component placement and signal integrity on the PC board. It is

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

suggested that the user duplicate the layout of the MAX1276 EV kit board to the maximum possible extent allowed by their application.

Near the ADC, proper star-grounding techniques provide maximum performance. Local connections to GND and RGND pins initiate at the exposed paddle of the ADC and a dedicated ground return trace is routed directly to the AGND pad.

For high-speed operational amplifiers (U2 and U3), stray capacitance on the input pins can adversely affect the performance. Components connected to the inputs of these buffers are located as close as possible to  the  input  and  the  ground  plane  is  removed  below these pins to reduce stray capacitance.

Two separate ground planes exist for the analog and digital components. Connections to the two planes are indicated by different symbols on the schematic. Ground connections for the digital signal connections (and the digital buffer U4) are tied to the digital ground plane. All others are tied to the analog ground. A look at the second layer (Figure 13) reveals the two ground planes located on an interior layer.

The ground planes are shorted as close to the part as possible through a 0 Ω resistor  (short)  in  location  FB2. This method has proven to provide the best noise rejection and dynamic performance. In practice, some users prefer isolating the ground planes through a resistor or ferrite bead.

## MAX1276 Evaluation Kit/Evaluation System

Figure 7. Input-Capacitor Options

<!-- image -->

## Evaluating Other Devices

The MAX1276EVKIT board can be used to evaluate any member of the MAX1070/MAX1071/MAX1072/MAX1075MAX1079/MAX1224/MAX1225/MAX1274-MAX1279 family.  Replace U1 with the device to be tested and set jumpers and power supplies as shown in Tables 3-6. If using the 68HC16 module, make the appropriate selections in the Device Parameter section of the program window. Note: Only those devices operating with 5V supplies can be used with the Maxim 68HC16MODULE (see Table 4).

## Troubleshooting

## Problem: Excessive current through one or more supplies.

- Examine all input signals to the DUT. Ensure that they are bounded by VDD and GND.
- If  using  on-board buffers, be sure that the buffer supply voltages are applied.
- Check VLOGIC voltage and all SPI inputs. The MAX1276 is specified for VLOGIC ranging from 1.8V up to VDD. Note: VLOGIC and VDD must be set to 5.0V when using the EV kit with the 68HC16 module.
- Check DOUT for excessive loading or short circuits. If  DOUT has been excessively loaded, the internal protection circuitry may activate, requiring power cycling to recover.

## Problem: No output measurement. System seems to report zero voltage, or fails to make a measurement.

- If the ADC under test is the MAX1276, use Tables 1 and 2 to verify the proper jumper positions and voltages. If the ADC has been replaced, use Tables 3, 4, and 5 to verify the jumper positions.
- Make sure JU5 and JU6 are shunted or bridged using an ammeter when measuring supply currents.
- Use a digital voltmeter to check AVDD, VLOGIC, +7V, -3V, and VREF voltages.
- Use an oscilloscope to verify the levels to AIN+ and AIN- by probing the appropriate location in JU1 and JU2. Use the AIN+ SENSE and AIN- SENSE pads to verify  DC input levels with the test device connected. ( Note: The isolation resistors limit the bandwidth of  AC measurement using the AIN+ SENSE and AIN- SENSE pads).
- Verify that both inputs are between GND and VDD. Verify that AIN levels are range compatible with the device selected (i.e., if the AIN- voltage is greater than AIN+, unipolar parts always read zero). See the appropriate part of the Input-Signal Setup Procedure section and verify that proper input conditions are met.
- Verify the SPI timing and levels. If using the Maxim software, set the SPI conversion to run continuously and use an oscilloscope to verify that the conversion-start  signal,  serial  clock,  and  the  data  output signals (CONVST, SCLK, and DOUT) have the proper timing. Marked pads are available for the oscilloscope probes.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1276 Evaluation Kit/Evaluation System

- Verify DOUT loading is within specification. Applying excessive loads to DOUT directly (pin 5 in header P1) can cause timing/level errors and can engage the part's protection circuitry. In most cases, the buffered DOUT pad should be used for observation and sampling (this output is also available on pin 7 in header P1).

## Problem: Measurements are erratic, unstable; poor accuracy.

- Check the reference voltage using a digital voltmeter across the VREF and RGND SENSE pads. Check the differential input voltage using a digital voltmeter across the AIN+ and AIN- SENSE pads. These pads have a resistor in series to prevent voltmeters from injecting noise into sensitive nodes. Note: The isolation resistors limit the bandwidth for AC measurements.
- If  using  direct-drive  inputs,  verify  the  sources  have adequate drive capability. Consider using the onboard buffers if in doubt.
- Use an oscilloscope to check for noise on the reference and supply voltages. When probing for noise, keep the oscilloscope ground return lead as short as possible, preferably less than 0.5in (10mm).
- If  using  an  internal  reference  part,  verify  the  JU3 jumper is configured properly (see Table 6). Check that any added circuitry also using the internal reference level is not causing interference (pulling the J3 shunt provides a quick disconnect of the VREF I/O pin to identify off-board loading effects).
- If using an external source for VREF, verify the JU3 jumper is connected and set properly (see Table 6). Verify that the external reference used has adequate drive capability. Check that any added circuitry also using the external reference is not causing interference.
- Verify  instrument  connections. Ensure that grounds for the digital (SPI) signals are connected to DGND. Connect grounds for the power supplies, external reference supply (if used), and the input supplies (or signal generator) to AGND.
- Verify DOUT loading is within spec. Applying excessive loads to DOUT directly (pin 5 in header P1) can cause timing/level errors and can engage the part's protection circuitry. In most cases, the buffered DOUT pad should be used for observation and sampling (this output is also available on pin 7 in header P1). When using a logic analyzer, be sure to use the buffered DOUT pin. Additional cable loading can be a source of noise.
- Verify the SPI timing and levels. If using the Maxim software, set the SPI conversion to run continuously and use an oscilloscope to verify that the conversion-start  signal,  serial  clock,  and  the  data  output signals (CONVST, SCLK, and DOUT) have the proper timing. Marked pads are available for the oscilloscope probes.

<!-- image -->

## Problem: Measurements show high noise floor.

After  confirming DC operation of the part and proper connection of all devices and jumpers, inspect the setup for any of the following possible causes of noise.

- Eliminate ground loops, for best performance multiple ground return paths should be avoided. All supply grounds should be referenced to the AGND pad(s), preferably the lower pad location (the upper pad location is intended for convenience when applying the +7V, -3V supplies). All DC sources (CMP, CMM, external VREF) should also follow this convention.
- Experiment with earth ground connections. Only one earth ground connection to the board is recommended. In some setups, improved results can be obtained if this earth is through a power supply connected to the DGND pad. This depends on the digital generator used to supply the SPI inputs. Many of these units supply an earth connection through their dual-pin interfaces.
- Some oscilloscopes also provide earth connections through their ground connections. In most cases, oscilloscopes should be removed from the board when making noise measurements to avoid multiple earth connections and ground loops.
- If  using  direct-drive  inputs,  verify  the  sources  have adequate drive capability. Consider using the onboard buffers if in doubt. If using multiple boards, verify that there are no ground loops between the boards.
- Use a spectrum analyzer to verify signal integrity both at the source and at the inputs of the test ADC.
- Verify SPI inputs are correct and meet all timing and level  requirements. Verify periodic sampling is as expected when performing dynamic measurements.
- Look for sources of environmental noise. Check your lab and bench for possible sources of noise from neighboring equipment or from AC mains.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

## Problem: Measurements show high levels of distortion.

- Verify AIN levels are within the specified ranges for the part, both with respect to supply and reference values. Failure to do so results in clipping of the differential input. This is usually observed as excessive harmonic content.
- When using on-board buffers, verify that ACIN inputs and AIN outputs are within the linear range of the amplifiers. Inspect waveforms for signs of clipping.
- Verify the input signal generators have the expected level of purity. Many signal generators require external  filters  to  provide  true  12-bit  purity.  Also  ensure the signal generators are operating in their linear range. It may be necessary to adjust the resistive feedback paths around the internal buffers if more signal gain is required.
- Use a spectrum analyzer to verify signal integrity both at the source and at the inputs of the ADC under test.
- Verify the input signal generators have the expected termination; the EV kit is set up with 50 Ω termination.
- If  experimenting with R1 and R2 or C1 values (or dual input capacitors), verify that the buffers or external sources are maintaining stability. Also verify that the source impedance is not interacting with the test device. (Refer to the product datasheet for typical THD performance vs. source impedance.)
- Verify SPI inputs are correct and meet all timing and level  requirements. Verify periodic sampling is as expected when performing dynamic measurements.

## Problem: FFT measurements show excessive signal spreading.

- If  using  coherent  sampling techniques (preferred), check the following. Ensure signal and master clock generators have the required frequency resolution to maintain full coherency. Synchronize all coherent sources using proper connection techniques; be certain proper locking is achieved.
- If  using  noncoherent sampling techniques, be sure to apply proper windowing functions to the data.
- In  all  cases,  be  certain  that  your  FFT  routines  are operating correctly and are being supplied with enough samples to show the desired level of resolution and accuracy.
- Verify  that  master-clock-derived SPI input signals are in fact coherent and periodic.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Deserializer Board (Optional)

A deserializer board can be used to convert the serialoutput format of the MAX1276 family to a parallel data format. Use of a deserializer greatly simplifies testing when using a logic analyzer. The circuit shown in Figure 8 has been used successfully with the EV kit. It consists of a shift register (CD74AC164E) followed by a transparent latch (MC74AC373N). The deserializer board should be powered from the VLOGIC and DGND pads.

## Deserializer Signals

The deserializer requires an additional set of signals to drive its  circuitry  and  the  logic  analyzer.  An  example set of SPI and deserializer waveforms is detailed in Figure 9. The deserializer board shown can support up to 16-bit digital word lengths. The MAX1276 family provides 12-bit digital outputs. The serial digital output of the test device, D[11:0], can be read in parallel format as B[11:0]. Be sure to configure the logic analyzer accordingly.

## MAX1276 Evaluation Kit/Evaluation System

<!-- image -->

Figure 8. Deserializer Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

Figure 9. Deserializer Waveform Example

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

<!-- image -->

Figure 10. MAX1276 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1276 Evaluation Kit/Evaluation System

<!-- image -->

Figure 11. MAX1276 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 13. MAX1276 EV Kit PC Board Layout-Layer 2 Ground Planes

Figure 12. MAX1276 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 14. MAX1276 EV Kit PC Board Layout-Layer 3 Power Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1276 Evaluation Kit/Evaluation System

Figure 15. MAX1276 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 16. MAX1276 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.