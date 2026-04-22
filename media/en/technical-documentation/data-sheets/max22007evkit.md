<!-- lastmod 2023-04-03 -->
## MAX22007 Evaluation Kit

## General Description

The MAX22007 evaluation kit (EV kit) provides the hardware and software necessary to evaluate the MAX22007 Industrial Four-Channel Configurable Analog Output. The MAX22007  EV  kit  communicates  with  a  graphical  user interface (GUI) running on a PC through a USB port. The EV kit provides the on-board FT2232 USB-to-SPI bridge for  SPI  communiation,  but  also  allows  an  external  SPI master to communicate with the MAX22007 through the PMOD1 connector. The onboard DC-DC converters generate necessary supply voltages, +15V for HVDD, +3.3V for V DD , and -2V for HVSS to power the MAX22007.

Multiple  MAX22007 EV kit  boards  can  be  connected  in daisy-chain mode using PMOD1 and PMOD2 connectors.

## MAX22007 EV Kit Photo

<!-- image -->

Windows is a registered trademark of Microsoft Corporation.

Evaluates: MAX22007

## Features

- Two Accessible Modes:
- Analog Output-Voltage Mode
- Analog Output-Current Mode
- Supports Load Impedance Detection
- Access to All GPIOs
- Windows ®  10-Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX22007 EV Kit Block Diagram

<!-- image -->

│

Evaluates: MAX22007

## Quick Start

## Required Equipment

- MAX22007EVKIT#
- Micro-USB cable
- 24V, 1A DC power supply
- Windows 10 PC with a spare USB port
- Multimeter

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1) Visit www.maximintegrated.com to download the  latest  version  of  the  EV  kit  software  installer, MAX22007EVKITSetupV1.0.EXE or newer.
- 2) Install  the  EV  kit  software  and  USB  driver  on  your computer by running the EV kit software installer inside the temporary folder. The program files are cop -ied to your PC and icons are created in the Windows Start  |  Programs  |  Maxim  Integrated menu.  During software installation, some versions of Windows might  show  a  warning  message  indicating  that  this software is from Maxim Integrated. This is not an error  condition  and  it  is  safe  to  proceed  with  installation. Administrator privileges are required to install the USB device driver.
- 3) Verify that all the jumpers are in their default positions as shown in Table 1.
- 4) Connect  a  24V  DC  power  adapter  to  the  barrel connector  J1,  or  use  a  24V  DC  power  supply  connected  on  the  V24V  and  PGND  test  points  on  the EV kit board. The green LEDs (LED\_24V, LED\_15V, LED\_3V3, and LED\_N2V) should be on to indicate all onboard supplies are up and running.
- 5) Connect the micro-USB cable from the PC to the EV kit board. The green LED (LED\_USB) should be on to  indicate  the  USB-to-SPI  bridge  is  powered  up. A Windows message appears when connecting the EV kit board to the PC for the first time. Each version of Windows has a slightly different message. If you see a Windows message stating ready to use , then proceed to the next step.
- 6) Start the EV kit software by opening its icon in the Windows Start  |  Programs  |  Maxim  Integrated menu. The EV kit software Analog Output tab appears, as shown in Figure 1.
- 7) Verify  that Status: MAX22007EVKIT Connected is displayed on the status bar at the bottom of the application window (Figure 1).
- 8) To test Analog Output Voltage Mode on Channel 3, connect a voltmeter across pin 1 and pin 4 of terminal DAC3, or between test point AO3 and TP3\_GND.
- 9) In the Channel 3 Mode dropdown list, select Voltage 0-10V .
- 10)  Select the Setting text box and type '10.'
- 11)  Click  the Set pushbutton and then click the Toggle LDACB pushbutton to update the channel 3 output. Verify that the voltmeter now reads about 10V.
- 12)  To test Analog Output Current Mode on Channel 2, connect an ampere meter between pin 1 and pin 4 of terminal DAC2, or between test point AO2 and TP2\_ GND. In the Channel 2 Mode dropdown list, select Current 0-20mA .
- 13)  Select the Setting text box and type '20.'
- 14)  Click  the Set pushbutton and then click the Toggle LDACB pushbutton to update the channel 2 output. Verify that the ampere meter now reads about 20mA.
- 15)  Select the Register tab and click on the Read All button to read all of the registers in the device.
- 16)  Inspect  the  contents  of  register  0x0A  CHANNEL3\_ DATA  and register  0x09  CHANNEL2\_DATA  are 0xCCC0  and  match  the  values  from  the  previous steps (Figure 2).

## Evaluates: MAX22007

│

Evaluates: MAX22007

Figure 1. MAX22007 EV Kit Software, Analog Output Tab

<!-- image -->

Figure 2. MAX22007 EV Kit Software, Register Tab

<!-- image -->

Table 1. MAX22007 EV Kit Shunt Positions and Settings

| JUMPER                       | SHUNT POSITON                | DESCRIPTION                                                                                             |
|------------------------------|------------------------------|---------------------------------------------------------------------------------------------------------|
| POWER SUPPLIES AND REFERENCE | POWER SUPPLIES AND REFERENCE | POWER SUPPLIES AND REFERENCE                                                                            |
| J2                           | 1-2                          | Use the external power supply from the EXT_HVDD test point as the MAX22007 HVDD supply                  |
| J2                           | 2-3*                         | Use onboard +15V supply as the MAX22007 HVDD supply                                                     |
| J3                           | 1-2                          | Use the external power supply from the EXT_VDD test point as the MAX22007 V DD supply                   |
| J3                           | 2-3*                         | Use onboard +3.3V supply as the MAX22007 V DD supply                                                    |
| J4                           | 1-2*                         | Use onboard -2V supply as the MAX22007 HVSS supply                                                      |
| J4                           | 2-3                          | Connect the MAX22007 HVSS to GND                                                                        |
| J4                           | Open                         | Use the external power supply from the HVSS test point as the MAX22007 HVSS supply                      |
| J5                           | 1-2                          | Use the onboard +2.5V reference from the MAX6126 as the MAX22007 external reference voltage             |
| J5                           | 2-3*                         | Connect the MAX22007 external reference pin REF_EXT to GND; use the MAX22007 in internal reference mode |
| ANALOG OUTPUTS               | ANALOG OUTPUTS               | ANALOG OUTPUTS                                                                                          |
|                              | Open                         | Disconnect Channel 1 CIN1 and VIP1; use in 4-wire mode                                                  |
| J6                           | Closed*                      | Connect Channel 1 CIN1 and VIP1; use in 2-wire mode                                                     |
| J7                           | Open                         | Disconnect Channel 1 VIN1 and GND; use in 4-wire mode                                                   |
| J7                           | Closed*                      | Connect Channel 1 VIN1 and GND; use in 2-wire mode                                                      |
| J8                           | Open                         | Disconnect Channel 0 CIN0 and VIP0; use in 4-wire mode                                                  |
| J8                           | Closed*                      | Connect Channel 0 CIN0 and VIP0; use in 2-wire mode                                                     |
| J9                           | Open                         | Disconnect Channel 0 VIN0 and GND; use in 4-wire mode                                                   |
| J9                           | Closed*                      | Connect Channel 0 VIN0 and GND; use in 2-wire mode                                                      |
| J10                          | Open                         | Disconnect Channel 3 CIN3 and VIP3; use in 4-wire mode                                                  |
| J10                          | Closed*                      | Connect Channel 3 CIN3 and VIP3; use in 2-wire mode                                                     |
| J11                          | Open                         | Disconnect Channel 3 VIN3 and GND; use in 4-wire mode                                                   |
| J11                          | Closed*                      | Connect Channel 3 VIN3 and GND; use in 2-wire mode                                                      |
| J12                          | Open                         | Disconnect Channel 2 CIN2 and VIP2; use in 4-wire mode                                                  |
| J12                          | Closed*                      | Connect Channel 2 CIN2 and VIP2; use in 2-wire mode                                                     |
| J13                          | Open                         | Disconnect Channel 2 VIN2 and GND, use in 4-wire mode                                                   |
| J13                          | Closed*                      | Connect Channel 2 VIN2 and GND, use in 2-wire mode                                                      |

Evaluates: MAX22007

│

## Table 2. MAX22007 EV Kit Connector Description

| CONNECTOR   | DESCRIPTION                                                                                                                                                                                                                |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1          | Barrel connector with positive center polarity as EV kit main power supply, connect +24V DC to J1, or connect +24V DC between V24V and PGND test points                                                                    |
| X1          | Micro-USB connector to connect the MAX22007 EV kit to a PC USB port                                                                                                                                                        |
| PMOD1       | 12-pin PMOD-compatible male connector to allow external microcontroller to configure the MAX22007. It can also be used in daisy-chain mode by connecting to the PMOD2 connector of another MAX22007 EV kit                 |
| PMOD2       | 12-pin PMOD-compatible female connector to be used in daisy-chain mode by connecting to the PMOD1 connector of another MAX22007 EV kit. Pin 1 of PMOD2 is routed to the MAX22007 RDY signal                                |
| CONN1       | Terminal block for the MAX22007 GPIO0-GPIO7. Refer to the MAX22007 EV Kit Schematic Diagrams for the CONN1 pinout.                                                                                                         |
| DAC0        | Terminal Block for MAX22007 Channel 0. In 4-wire mode, remove shunts J8 and J9 and connect the load. In 2-wire mode, close shunts J8 and J9, and connect the load between pin 1 and pin 4, or between pin 2 and pin 3.     |
| DAC1        | Terminal Block for MAX22007 Channel 1. In 4-wire mode, remove shunts J6 and J7 and connect the load. In 2-wire mode, close shunts J6 and J7, and connect the load between pin 1 and pin 4, or between pin 2 and pin 3.     |
| DAC2        | Terminal Block for MAX22007 Channel 2. In 4-wire mode, remove shunts J12 and J13 and connect the load. In 2-wire mode, close shunts J12 and J13, and connect the load between pin 1 and pin 4, or between pin 2 and pin 3. |
| DAC3        | Terminal Block for MAX22007 Channel 3. In 4-wire mode, remove shunts J10 and J11 and connect the load. In 2-wire mode, close shunts J10 and J11, and connect the load between pin 1 and pin 4, or between pin 2 and pin 3. |

## Table 3. MAX22007 EV Kit Test Point Description

| TEST POINT               | DESCRIPTION                                            |
|--------------------------|--------------------------------------------------------|
| MAX22007 LOGIC INTERFACE | MAX22007 LOGIC INTERFACE                               |
| CSB (YELLOW)             | MAX22007 CS pin; same as PMOD1 pin 1                   |
| SCLK (YELLOW)            | MAX22007 SCLK pin; same as PMOD1 pin 4 and PMOD2 pin 4 |
| SDI (YELLOW)             | MAX22007 SDI pin; same as PMOD1 pin 2 and PMOD2 pin 2  |
| SDO (YELLOW)             | MAX22007 SDO pin; same as PMOD1 pin 3 and PMOD2 pin 3  |
| INTB (YELLOW)            | MAX22007 INT pin; same as PMOD1 pin 9 and PMOD2 pin 9  |
| LDACB (YELLOW)           | MAX22007 LDAC pin; same as PMOD1 pin 8 and PMOD2 pin 8 |
| RDYB (YELLOW)            | MAX22007 RDY pin; same as PMOD2 pin 1                  |
| RSTB (YELLOW)            | MAX22007 RST pin; same as PMOD1 pin 7 and PMOD2 pin 7  |
| TP7_GND (BLACK)          | MAX22007 Analog Ground                                 |
| GND0 (WHITE)             | MAX22007 GND0 pin and analog ground                    |
| GND1 (WHITE)             | MAX22007 GND1 pin and analog ground                    |
| GND2 (WHITE)             | MAX22007 GND2 pin and analog ground                    |
| GND3 (WHITE)             | MAX22007 GND3 pin and analog ground                    |
| GPIO0 (GREEN)            | MAX22007 GPIO0 pin; same as CONN1 pin 9                |
| GPIO1 (GREEN)            | MAX22007 GPIO1 pin; same as CONN1 pin 8                |
| GPIO2 (GREEN)            | MAX22007 GPIO2 pin; same as CONN1 pin 7                |
| GPIO3 (GREEN)            | MAX22007 GPIO3 pin; same as CONN1 pin 6                |
| GPIO4 (GREEN)            | MAX22007 GPIO4 pin; same as CONN1 pin 5                |

│

Evaluates: MAX22007

## Table 3. MAX22007 EV Kit Test Point Description (continued)

| TEST POINT                            | DESCRIPTION                                                                                      |
|---------------------------------------|--------------------------------------------------------------------------------------------------|
| GPIO5 (GREEN)                         | MAX22007 GPIO5 pin; same as CONN1 pin 4                                                          |
| GPIO6 (GREEN)                         | MAX22007 GPIO6 pin; same as CONN1 pin 3                                                          |
| GPIO7 (GREEN)                         | MAX22007 GPIO7 pin; same as CONN1 pin 2                                                          |
| TP8_GND (BLACK)                       | MAX22007 Analog Ground                                                                           |
| MAX22007 ANALOG OUTPUTS AND REFERENCE | MAX22007 ANALOG OUTPUTS AND REFERENCE                                                            |
| AO0 (BROWN)                           | MAX22007 Channel 0 Analog Output; same as DAC0 pin 4                                             |
| TP0_GND (BLACK)                       | MAX22007 Analog Ground                                                                           |
| AO1 (BROWN)                           | MAX22007 Channel 1 Analog Output; same as DAC1 pin 4                                             |
| TP1_GND (BLACK)                       | MAX22007 Analog Ground                                                                           |
| AO2 (BROWN)                           | MAX22007 Channel 2 Analog Output; same as DAC2 pin 4                                             |
| TP2_GND (BLACK)                       | MAX22007 Analog Ground                                                                           |
| AO3 (BROWN)                           | MAX22007 Channel 3 Analog Output; same as DAC3 pin 4                                             |
| TP3_GND (BLACK)                       | MAX22007 Analog Ground                                                                           |
| REF_2V5 (ORANGE)                      | MAX6126 Reference Output; it is connected to the MAX22007 REF_EXT pin when J5 is in 1-2 position |
| TP5_GND (BLACK)                       | MAX22007 Analog Ground                                                                           |
| REF_OUT (ORANGE)                      | MAX22007 Internal Reference Output Pin                                                           |
| TP6_GND (BLACK)                       | MAX22007 Analog Ground                                                                           |
| MAX22007 POWER SUPPLIES               | MAX22007 POWER SUPPLIES                                                                          |
| +15V (ORANGE)                         | Onboard isolated +15V generated by the MAX17690 for MAX22007 HVDD supply                         |
| EXT_HVDD (RED)                        | External supply input for MAX22007 HVDD                                                          |
| TP9_GND (BLACK)                       | MAX22007 Analog Ground                                                                           |
| TP11_GND (BLACK)                      | MAX22007 Analog Ground                                                                           |
| 3V3 (ORANGE)                          | Onboard +3.3V generated by the MAX17532 for MAX22007 V DD supply                                 |
| EXT_VDD (RED)                         | External supply input for MAX22007 V DD                                                          |
| TP12_GND (BLACK)                      | MAX22007 Analog Ground                                                                           |
| -2V (BLUE)                            | Onboard -2V generated by the MAX17532 for optional MAX22007 HVSS supply                          |
| HVSS (BLUE)                           | External supply input for MAX22007 HVSS                                                          |
| TP13_GND (BLACK)                      | MAX22007 Analog Ground                                                                           |
| EV KIT SUPPLY, USB SUPPLY, EARTH      | EV KIT SUPPLY, USB SUPPLY, EARTH                                                                 |
| V24V (RED)                            | +24V DC power supply for the EV kit; same as the J1 connector                                    |
| PGND (BLACK)                          | EV kit power ground; same as the J1 connector                                                    |
| 3V3_USB (RED)                         | Onboard +3.3V logic supply generated by the MAX1556 for the FT2232 and logic-side circuitry      |
| UGND (BLACK)                          | Logic-Side or USB Ground                                                                         |
| EARTH (WHITE)                         | Protected earth on the MAX22007 EV kit                                                           |

│

Evaluates: MAX22007

## Detailed Description of Software

The  MAX22007 EV kit  along  with  its  software  provides an  easy-to-use  and  flexible  solution  to  evaluate  the MAX22007, four-channel, 12-bit configurable analog output.

## Generating an Analog Output

The Analog  Output tab  of  the  MAX22007  EV  kit  software quickly sets a voltage or current at AO\_ and GND terminals of connectors DAC0-DAC3. To set a voltage or current:

- Select the desired voltage or current mode using the Mode dropdown list
- Enter a voltage (V) or current (mA) in the Setting text box. The voltage range is 0V-12.5V and current range is 0mA-25mA.
- Click the Set pushbutton
- If the Latch slider bar is set to Latch Transparent , the output updates immediately, but if the Latch Enabled mode is used, the user must click the Toggle LDACB pushbutton to update the output voltage or current.

Instead of a voltage or current value, a specific DAC code can be entered in the Hex text box.

The DAC Reference dropdown list selects between the internal reference and an external reference on the EV kit.

Evaluates: MAX22007

If an external reference is selected, place a shunt across pins  1  and  2  of  J5  to  use  the  MAX6126  onboard  reference. To use an off-board reference, remove any shunt on J5, and supply the reference voltage on pin 2 of J5.

## Analog Output Calibration

The MAX22007 is factory calibrated for gain and offset. The EV kit software does not support analog output calibration.

## Voltage-/Current-Mode Auto-Detection

The MAX22007 EV kit software demonstrates a voltage-/ current-mode auto-detection feature using MAX22007 internal comparators.

In the Load Impedance Detect/Auto-Mode box, the user can define an impedance threshold value (default is 500Ω). The  output  level  is  set  by  the Excitation  (%) text  box  in each channel configuration box. Once the load impedance is  determined, the output level is set to the excitation percentage multiply by 10V or 20mA, depending on the output mode. The maximum allowed excitation level is 125%. By clicking the Auto Detect All Channels pushbutton, the EV kit software determines the load impedance for each channel by utilizing the internal comparator, which has a typical 500mV threshold  voltage.  Each  channel  is  initially  configured in the current mode. Based on the output current value that toggles the comparator output, the software calculates the  load  impedance  and  determines  whether  to  configure the channel in voltage mode or current mode. If the calcu-

Figure 3. MAX22007 EV Kit Software, Load-Impedance Detect Setup

<!-- image -->

│

lated impedance is below the threshold, the output is set to the current mode, and conversely if the impedance is above the  threshold,  it  is  set  to  the  voltage  mode.  The  voltage-/ current-mode auto-detection feature of the MAX22007 EV kit software can be seen in Figure 3 and Figure 4. Refer to the MAX22007 IC data sheet for details on the comparator.

## Configuring the Registers

The Register tab permits read/write access to individual MAX22007 registers. As shown in Figure 2, the table at

Evaluates: MAX22007

left side lists each of the MAX22007 registers. The table at right side lists the bit fields for any register selected in the left table.

To modify the writable bits of any register, update either the Value cell in the register table, or the Setting cell in the bit field table, then click either the Write Selected button or the Write Modified button.

The row associated with a modified register highlights red until that register is either written or read.

Figure 4. MAX22007 EV Kit Software, Load-Impedance Detect Result

<!-- image -->

Figure 5. MAX22007 EV Kit Software, CRC Calculator

<!-- image -->

│

## Evaluates: MAX22007

Figure 6. MAX22007 EV Kit, Default Jumper Settings

<!-- image -->

## CRC Calculator

The MAX22007 EV kit software provides a CRC calculator to help the user verify their CRC calculation. Clicking CRC Calculator under  the Help menu  opens  the  CRC calculator window (Figure 5). The software calculates the CRC byte based on the first three bytes and displays the result (the fourth byte).

## Daisy-Chain Operation

The  MAX22007  EV  kit  software  supports  up  to  4 MAX22007 devices configured in daisy-chain mode. By default,  the  software  operates  in  non-daisy-chain  mode and  communicates  with  only  one  device,  which  is  indicated by ' No Daisy Chain ' in the Daisy Chain menu.

When  more  than  two  devices  are  connected  in  daisychain mode, after selecting which device to communicate with  in  the Daisy Chain menu, the Analog Output tab and the Register tab  are  updated to show the selected device's  register  content,  and  the  software  only  sends commands to the  specified  device.  The  software  maintains all four devices' register contents in the PC memory.

│

## Detailed Description of Hardware

The MAX22007 EV kit includes the MAX22007 configurable analog output, and the external components needed to evaluate the device. All important signals are available on color-coded test points (Table 3). The default jumper settings are shown in Table 1 and Figure 6.

## Isolated Power Domains

The MAX22007 EV kit, except the logic/USB domain, is powered  by  a  +24V  DC  supply  through  J1.  The  power supply circuitry with the MAX17690 (U8) and MAX17532 (U9,  U10)  converts  this  +24V  into  isolated  supplies  for HVDD (+15V), HVSS (-2V), and V DD  (+3.3V) needed by the MAX22007.

To reduce noise induced to loop currents going off-board, the  MAX22007  EV  kit  isolates  the  connection  to  a  PC through the USB connector.

The isolated  USB  section  takes  power  exclusively  from the USB connector X1. Digital isolators MAX22445 (U6) and MAX22446 (U7) keep the USB ground separate from the MAX22007 ground and the +24V power ground. The onboard USB-to-SPI bridge FT2232 is also powered by the USB supply.

## Configuring the Voltage Supplies

The MAX22007 configurable analog output needs 3 voltage  supplies,  HVDD,  HVSS,  and  V DD ,  referenced  to GND. The MAX22007 powers its analog output channels from  a  pair  of  high-voltage  supplies,  HVDD  and  HVSS. The  on-chip  DACs  and  logic  interface  are  powered through V DD .

Evaluates: MAX22007

The MAX22007 EV kit can be configured to use different voltage levels on HVDD, HVSS, and V DD  through jumpers J2, J3 and J4. Ensure that the MAX22007 EV kit is unpowered before reconfiguring any jumpers.

To supply HVDD from the on-board +15V supply, ensure that J2 is in the 2-3 position. If powering HVDD from an external supply, set J2 to the 1-2 position and provide a suitable voltage on the EXT\_HVDD test point. LED\_15V illuminates to confirm that HVDD is powered.

To  supply  HVSS  from  the  on-board  -2V  supply,  ensure that  J4  is  in  the  1-2  position.  If  no  negative  supply  is required  in  the  application,  connect  HVSS  to  GND  by setting J4 to the 2-3 position. If powering HVSS from an external supply, open J4 and provide a suitable voltage on the HVSS test point. LED\_N2V illuminates to confirm that HVSS is powered.

To supply V DD  from the on-board +3.3V supply, ensure that  J3  is  in  the  2-3  position.  If  powering  V DD   from  an external supply, set J3 to the 1-2 position and provide a suitable  voltage  on  the  EXT\_VDD  test  point.  LED\_3V3 illuminates to confirm that V DD  is powered.

CAUTION : when supplying HVDD, HVSS and V DD  externally, make sure that HVDD, HVSS, and V DD  are in the normal operating range. Refer to the MAX22007 IC data sheet for details.

## Output Configuration Options

The  MAX22007  EV  kit  makes  it  easy  to  provide  main power  through  a  barrel  connector  J1.  Provide  +24V  DC through  this  connector,  positive  in  the  center.  If  a  +24V DC power adapter with a barrel connector is not available, alternatively  the  +24V  DC  can  be  supplied  through  the V24V and PGND test points. LED\_24V near J1 illuminates when voltage is applied either through J1 or V24V/PGND. The  default  jumper  configuration  provides  isolated  onboard +15V for HVDD, -2V for HVSS, and +3.3V for V DD .

The  MAX22007  EV  kit  analog  output  channel  is  very flexible. Under software control, each output can be independently configured to behave as a voltage output from 0V to 12.5V, or a current output from 0mA to 25mA. The output can also be configured for 2-wire or 4-wire mode.

For channel 0, in 2-wire mode, close shunts J8 and J9, and connect the load between terminal DAC0 pin 1 and pin 4, or between pin 2 and pin 3. In 4-wire mode, remove shunts J8 and J9, and connect the load to 4-pin terminal DAC0.

Table 4 summarizes the jumper settings and modes for four channels.

## Table 4. Output Channel Configuration Options

|           |           | OUTPUT CONFIGURATION   | OUTPUT CONFIGURATION   |
|-----------|-----------|------------------------|------------------------|
| CHANNEL   | CONNECTOR | 2-WIRE MODE            | 4-WIRE MODE            |
| Channel 0 | DAC0      | J8 = J9 = Closed       | J8 = J9 = Open         |
| Channel 1 | DAC1      | J6 = J7 = Closed       | J6 = J7 = Open         |
| Channel 2 | DAC2      | J12 = J13 = Closed     | J12 = J13 = Open       |
| Channel 3 | DAC3      | J10 = J11 = Closed     | J10 = J11 = Open       |

│

## MAX22007 Reference Options

Besides  the  reference  integrated  in  the  MAX22007, the  MAX22007  EV  kit  also  has  an  on-board  reference (MAX6126), as well as the means to connect an off-board bench reference.

To  choose  the  internal  reference  for  the  MAX22007, select Internal from DAC Reference in the software and ensure that J5 is in the 2-3 position.

To use the on-board reference, select External from DAC Reference in  the  software  and  ensure  that  J5  is  in  the 1-2 position.

To choose an off-board reference, select External from DAC Reference in the software, ensure that J5 is open, and provide a 2.500V reference voltage on pin 2 of J5.

## Communicating with the MAX22007

The MAX22007 EV kit communicates to a PC through a commonly available USB A-to-micro-B cable. Since there is no on-board microprocessor, all coordination and lowlevel SPI transactions are managed by code on the PC as part of the MAX22007 EV kit software. This is ideal for quick evaluation and to explore the features and functions of the MAX22007.

For  users  who  prefer  more  direct  control  through  their own software,  logic  signals  are  made  available  through PMOD1, a 6 x 2 header with 0.1' spacing that is some-

Pmod is a trademark of Digilent Inc.

times  called  a  Pmod TM   connector  making  it  compatible with  many  FPGA  and  microcontroller  systems.  As  well as independent dedicated connection, PMOD1 can also mate with Maxim's USB2GPIO# control card. If PMOD1 is  used,  disconnect  the  USB-to-SPI  interface  from  the MAX22007 by opening all switches on SW1.

## Daisy-Chain Mode with the MAX22007

The MAX22007 EV kit can operate as a standalone unit, or  be  daisy-chained  with  other  MAX22007  EV  kits. The MAX22007 EV kit software supports up to 4 devices in a daisy chain, but the device itself can support more.

The  first  device  in  the  daisy  chain  (Device  0)  communicates  to  a  PC  through  a  USB  interface.  The  PMOD2 connector on the Device 0 EV kit connects to the PMOD1 connector on the Device 1 EV kit. In this way the RDY signal from Device 0 connects to the CS signal of Device 1.  Refer  to  the MAX22007 EV Kit Schematic Diagrams for details.

On the Device 0 EV kit, close all switches on SW1 in order to  allow  the  MAX22007  EV  kit  software  communicating with all devices in the daisy chain using Device 0 EV kit USB-to-SPI bridge. On all trailing EV kits, open all switches on SW1 to disconnect the MAX22007 SPI from their own USB-to-SPI bridge, preventing any bus contention.

Refer to the MAX22007 IC data sheet for  further details on daisy-chain mode.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22007EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX22007 EV Kit Bill of Materials

|   ITEM | REF_DES                                                               | DNI/DNP   |   QTY | MFG PART #                                                                                        | MANUFACTURER                           | VALUE   | DESCRIPTION                                                                                                                    |
|--------|-----------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------------------|----------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------|
|      1 | +15V, 3V3, REF_2V5, REF_OUT                                           | -         |     4 | 5013                                                                                              | KEYSTONE                               | N/A     | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      2 | -2V, HVSS                                                             | -         |     2 | 5127                                                                                              | KEYSTONE                               | N/A     | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|      3 | 3V3_USB, EXT_HVDD, EXT_VDD, V24V                                      | -         |     4 | 5010                                                                                              | KEYSTONE                               | N/A     | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |
|      4 | AO0-AO3                                                               | -         |     4 | 5125                                                                                              | KEYSTONE                               | N/A     | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|      5 | C1, C23, C24, C55, C57, C58                                           | -         |     6 | CL21B106KOQNNN; GRM21BZ71C106KE15                                                                 | SAMSUNG; MURATA                        | 10µF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10µF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                      |
|      6 | C2                                                                    | -         |     1 | C1608X7R1H474K080AC                                                                               | TDK                                    | 0.47µF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                              |
|      7 | C3, C67-C74, C87-C94                                                  | -         |    17 | C1608C0G2A102J080AA; C0603C102J1GAC                                                               | TDK;KEMET                              | 1000PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                    |
|      8 | C4, C37, C38                                                          | -         |     3 | C0603C103K2RAC                                                                                    | KEMET                                  | 0.01µF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01µF; 200V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R                         |
|      9 | C5                                                                    | -         |     1 | C2012X5R1C226K125AC                                                                               | TDK                                    | 22µF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 22µF; 16V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +85°C; TC = X5R                     |
|     10 | C6, C7, C10, C11, C15-C22, C25, C26, C29-C32, C36, C60, C61, C66, C99 | -         |    23 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K               | YAGEO; MURATA; TAIYO YUDEN; AVX;MURATA | 0.1µF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                    |
|     11 | C8, C9, C14                                                           | -         |     3 | TMK212AB7475K; CGJ4J1X7R1E475K125AC; C2012X7R1E475K125AB; CGA4J1X7R1E475K125AC; GRM21BZ71E475KE15 | TAIYO YUDEN; TDK;TDK;TDK; MURATA       | 4.7µF   | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                     |
|     12 | C12, C13                                                              | -         |     2 | C0603C0G500-180JNE; C1608C0G1H180J080AA; GRM1885C1H180J                                           | VENKEL LTD.; TDK;MURATA                | 18PF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 18PF; 50V; TOL = 5%; MODEL = ; TG = -55°C TO +125°C; TC = C0G                             |
|     13 | C27, C33, C80-C83, C85                                                | -         |     7 | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV-FR                     | TDK;MURATA; TDK; TAIYO YUDEN           | 0.1µF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                     |
|     14 | C28, C34, C104                                                        | -         |     3 | C1005C0G2A151J050BA                                                                               | TDK                                    | 150PF   | CAP; SMT (0402); 150PF; 5%; 100V; C0G; CERAMIC CHIP                                                                            |
|     15 | C35                                                                   | -         |     1 | C2012X7S2A105K125AB; GRJ21BC72A105KE11; CGA4J3X7S2A105K125AB; GRM21BC72A105KE01                   | TDK; MURATA;TDK                        | 1µF     | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                                      |
|     16 | C39, C75                                                              | -         |     2 | C2012X7R1H225K125AC                                                                               | TDK                                    | 2.2µF   | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                     |
|     17 | C41, C51, C52, C76                                                    | -         |     4 | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                                | MURATA; SAMSUNG ELECTRONICS; TAIYO YU  | 10µF    | CAPACITOR; SMT (1210); CERAMIC CHIP; 10µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                      |
|     18 | C42                                                                   | -         |     1 | C0603C683J5RAC; C0603X683J5RAC                                                                    | KEMET; KEMET                           | 0.068µF | CAPACITOR; SMT; 0603; CERAMIC; 0.068µF; 50V; 5%; X7R; -55°C to + 125°C; 0 ± 15%°C MAX.                                         |
|     19 | C43, C49, C50, C54                                                    | -         |     4 | GRM32ER72A225KA35; CGA6N3X7R2A225K230AB; CC1210KKX7R0BB225; HMK325B7225KM                         | MURATA;TDK; YAGEO; TAIYO YUDEN         | 2.2µF   | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2µF; 100V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C to +125°C; TC = X7R                |
|     20 | C44, C63, C65, C96, C98                                               | -         |     5 | GCM1885C2A471JA16                                                                                 | MURATA                                 | 470PF   | CAP; SMT (0603); 470PF; 5%; 100V; C0G; CERAMIC CHIP                                                                            |
|     21 | C45, C46                                                              | -         |     2 | CGA3E2X7R2A223K080AA                                                                              | TDK                                    | 0.022µF | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.022µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                  |
|     22 | C56                                                                   | -         |     1 | C1608X7R1H224K080; GRM188R71H224KAC4                                                              | TDK;MURATA                             | 0.22µF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                    |

Evaluates: MAX22007

## MAX22007 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                  | DNI/DNP   |   QTY | MFG PART #                                     | MANUFACTURER              | VALUE             | DESCRIPTION                                                                                                                    |
|--------|--------------------------------------------------------------------------|-----------|-------|------------------------------------------------|---------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------|
|     23 | C59, C77-C79, C84, C86                                                   | -         |     6 | UMK107AB7105KA; CC0603KRX7R9BB105              | TAIYO YUDEN; YAGEO        | 1µF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                       |
|     24 | C62, C64, C95, C97                                                       | -         |     4 | 06031U240FAT2A                                 | AVX                       | 24PF              | CAP; SMT (0603); 24PF; 1%; 100V; C0G; CERAMIC CHIP                                                                             |
|     25 | C102                                                                     | -         |     1 | DK1E3EA102M86RAH01                             | MURATA                    | 1000PF            | CAP; SMT; 1000PF; 20%; 250V; E; CERAMIC CHIP                                                                                   |
|     26 | CONN1                                                                    | -         |     1 | 1984691                                        | PHOENIX CONTACT           | 1984691           | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK; RIGHT ANGLE; 10PINS                                                           |
|     27 | CSB, INTB, LDACB, RDYB, RSTB, SCLK, SDI, SDO                             | -         |     8 | 5014                                           | KEYSTONE                  | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     28 | D1                                                                       | -         |     1 | DFLS1200                                       | DIODES INCORPORATED       | DFLS1200          | DIODE; RECT; SMT (POWERDI-123); PIV = 200V; IF = 1A                                                                            |
|     29 | D2                                                                       | -         |     1 | DFLS1100-7                                     | DIODES INCORPORATED       | DFLS1100-7        | DIODE; SCHOTTKY; SMT; PIV = 100V; IF = 1A                                                                                      |
|     30 | D4-D7                                                                    | -         |     4 | BAT46WJ                                        | NXP                       | BAT46WJ,115       | DIODE; SCH; SMT (SOD-323F); PIV = 100V; IF = 0.25A                                                                             |
|     31 | D8                                                                       | -         |     1 | BAT41Z                                         | ST MICROELECTRONICS       | BAT41Z            | DIODE; SCH; SMT (SOD-123); PIV = 100V; IF = 0.2A                                                                               |
|     32 | D9                                                                       | -         |     1 | SM30T39AY                                      | ST MICROELECTRONICS       | 38.6V             | DIODE; TVS; SMC (DO-214AB); VRM = 38.6V; IPP = 56.3A                                                                           |
|     33 | D10-D13                                                                  | -         |     4 | SMBJ36CA                                       | FAIRCHILD SEMICONDUCTOR   | 36V               | DIODE; TVS; SMB (DO-214AA); VRM = 36V; IPP = 10.3A                                                                             |
|     34 | DAC0-DAC3                                                                | -         |     4 | 1935187                                        | PHOENIX CONTACT           | 1935187           | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 4PINS                                                         |
|     35 | DS1, LED_3V3, LED_15V, LED_24V, LED_N2V, LED_USB                         | -         |     6 | LTST-C193KGKT-5A                               | LITE-ON ELECTRONICS INC.  | LTST-C193KGKT-5A  | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV = 1.9V; IF = 0.005A; -55°C TO +85°C                                        |
|     36 | EARTH, GND0-GND3                                                         | -         |     5 | 5012                                           | KEYSTONE                  | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     37 | GPIO0-GPIO7                                                              | -         |     8 | 5126                                           | KEYSTONE                  | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     38 | J1                                                                       | -         |     1 | PJ-202AH                                       | CUI INC.                  | PJ-202AH          | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                               |
|     39 | J2-J5                                                                    | -         |     4 | PCC03SAAN                                      | SULLINS                   | PCC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65°C TO +125°C                                             |
|     40 | J6-J13                                                                   | -         |     8 | PCC02SAAN                                      | SULLINS                   | PCC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65°C TO +125°C                                             |
|     41 | L1, L3, L4                                                               | -         |     3 | BLM21PG331SN1                                  | MURATA                    | 330               | INDUCTOR; SMT (0805); FERRITE-BEAD; 330; TOL = ± 25%; 1.5A                                                                     |
|     42 | L2                                                                       | -         |     1 | B82432T1332K000                                | TDK                       | 3.3µH             | INDUCTOR; SMT (1812); FERRITE CORE; 3.3µH; TOL = ±10%; 0.9A                                                                    |
|     43 | L5                                                                       | -         |     1 | LPS3015-683MR                                  | COILCRAFT                 | 68µH              | INDUCTOR; SMT; FERRITE CORE; 68µH; TOL = ±20%; 0.33A                                                                           |
|     44 | L6                                                                       | -         |     1 | LPS5030-154MR                                  | COILCRAFT                 | 150µH             | INDUCTOR; SMT; SHIELDED; 150µH; TOL = ±20%; 0.57A                                                                              |
|     45 | LED0-LED7                                                                | -         |     8 | LTST-C193KSKT-5A                               | LITE-ON ELECTRONICS INC.  | LTST-C193KSKT-5A  | DIODE; LED; YELLOW; SMT (0603); VF = 2V; IF = 0.005A                                                                           |
|     46 | LED_INTB                                                                 | -         |     1 | LTST-C193KRKT-2A                               | LITE-ON ELECTRONICS INC.  | LTST-C193KRKT-2A  | DIODE; LED; EXTRA THIN; EXTRA BRIGHT; RED; SMT (0603); VF = 2.2V; IF = 0.002A                                                  |
|     47 | MTH1-MTH4                                                                | -         |     4 | 9032                                           | KEYSTONE                  | 9032              | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                      |
|     48 | PGND, TP0_GND, TP1_GND-TP3_GND, TP5_GND-TP9_GND, TP11_GND-TP13_GND, UGND | -         |    14 | 5011                                           | KEYSTONE                  | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     49 | PMOD1                                                                    | -         |     1 | TSW-106-08-S-D-RA                              | SAMTEC                    | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                                      |
|     50 | PMOD2                                                                    | -         |     1 | PPPC062LJBN-RC                                 | SULLINS ELECTRONICS CORP. | PPPC062LJBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; 0.1IN CC; HEADER; 2 ROW; RIGHT ANGLE; 12PINS                                                  |
|     51 | Q1                                                                       | -         |     1 | SIR698DP-T1-GE3                                | VISHAY SILICONIX          | SIR698DP-T1-GE3   | TRAN; N-CHANNEL 100 V (D-S) MOSFET; NCH; SO-8; PD-(23W); I-(7.5A); V-(100V)                                                    |
|     52 | R1                                                                       | -         |     1 | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL | VISHAY DALE; PANASONIC    | 100               | RESISTOR; 0603; 100 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                          |
|     53 | R2, R3                                                                   | -         |     2 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0   | VISHAY DALE; ROHM         | 10                | RESISTOR; 0603; 10Ω; 1%; 100PPM; 0.10W; THICK FILM                                                                             |

│

Evaluates: MAX22007

## MAX22007 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                 | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                                  | VALUE    | DESCRIPTION                                                                                                   |
|--------|---------------------------------------------------------|-----------|-------|------------------------------------------------------------------------------------|-----------------------------------------------|----------|---------------------------------------------------------------------------------------------------------------|
|     54 | R4, R6, R10-R12, R33, R34                               | -         |     7 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY DALE; PANASONIC; YAGEO                 | 10K      | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                            |
|     55 | R5                                                      | -         |     1 | CRCW06032K20FK                                                                     | VISHAY DALE                                   | 2.2K     | RESISTOR, 0603, 2.2KΩ, 1%, 100PPM, 0.10W, THICK FILM                                                          |
|     56 | R7                                                      | -         |     1 | CRCW060315K0FK                                                                     | VISHAY DALE                                   | 15K      | RESISTOR, 0603, 15KΩ,1% , 100PPM, 0.10W, THICK FILM                                                           |
|     57 | R8                                                      | -         |     1 | CRCW060312K0FK                                                                     | VISHAY DALE                                   | 12K      | RESISTOR, 0603, 12KΩ, 1%, 100PPM, 0.10W, THICK FILM                                                           |
|     58 | R9, R13                                                 | -         |     2 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                                    | VISHAY; PANASONIC; BOURNS                     | 1K       | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                             |
|     59 | R14-R17, R22, R23, R59, R78-R85                         | -         |    15 | CRCW060320R0FK; ERJ-3EKF20R0                                                       | VISHAY DALE; PANASONIC                        | 20       | RESISTOR, 0603, 20Ω, 1%, 100PPM, 0.10W, THICK FILM                                                            |
|     60 | R18-R21, R26, R27, R48, R50, R61, R75, R106, R108, R109 | -         |    13 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                       | VISHAY; ROHM SEMICONDUCTOR; PANASONIC; BOURNS | 0        | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                             |
|     61 | R28-R30, R37, R87                                       | -         |     5 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO;YAGEO; PANASONIC           | 100K     | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                           |
|     62 | R31                                                     | -         |     1 | CRCW060310K7FK; ERJ-3EKF1072                                                       | VISHAY DALE; PANASONIC                        | 10.7K    | RESISTOR; 0603; 10.7KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                         |
|     63 | R32                                                     | -         |     1 | CRCW0603280KFK                                                                     | VISHAY DALE                                   | 280K     | RESISTOR; 0603; 280KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                          |
|     64 | R35                                                     | -         |     1 | CRCW0603287KFK                                                                     | VISHAY DALE                                   | 287K     | RESISTOR; 0603; 287KΩ; 1%; 100PPM; 0.10W; METAL FILM                                                          |
|     65 | R36, R51                                                | -         |     2 | ERJ-3EKF7502                                                                       | PANASONIC                                     | 75K      | RESISTOR; 0603; 75KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                           |
|     66 | R38                                                     | -         |     1 | CRCW060318K0FK                                                                     | VISHAY DALE                                   | 18K      | RESISTOR, 0603, 18KΩ, 1%, 100PPM, 0.10W, THICK FILM                                                           |
|     67 | R39                                                     | -         |     1 | CRCW0603162KFK                                                                     | VISHAY DALE                                   | 162K     | RESISTOR; 0603; 162KΩ; 1%; 100PPM; 0.1W; THICK FILM                                                           |
|     68 | R40                                                     | -         |     1 | CRCW06037K32FK                                                                     | VISHAY DALE                                   | 7.32K    | RESISTOR; 0603; 7.32KΩ; 1%; 100PPM; 0.1W; THICK FILM                                                          |
|     69 | R41, R52, R57                                           | -         |     3 | CRCW060349K9FK; ERJ-3EKF4992                                                       | VISHAY DALE; PANASONIC                        | 49.9K    | RESISTOR; 0603; 49.9KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                         |
|     70 | R42                                                     | -         |     1 | ERJ-3RQF2R2                                                                        | PANASONIC                                     | 2.2      | RESISTOR, 0603, 2.2Ω, 1%, 100PPM, 0.10W, THICK FILM                                                           |
|     71 | R43                                                     | -         |     1 | CRCW12069K10FK                                                                     | VISHAY DALE                                   | 9.1K     | RESISTOR, 1206, 9.1KOHMS, 1%, 100PPM, 0.25W, THICK FILM                                                       |
|     72 | R44                                                     | -         |     1 | WSL1206R0400FEA18                                                                  | VISHAY                                        | 0.04     | RES; SMT (1206); 0.04; 1%; ±75PPM/DEGC; 0.5W                                                                  |
|     73 | R46                                                     | -         |     1 | CRCW12064K99FKEAHP                                                                 | VISHAY                                        | 4.99K    | RES; SMT (1206); 4.99K; 1%; ±100PPM/DEGC; 0.75W                                                               |
|     74 | R47                                                     | -         |     1 | ERJ-3EKF1303                                                                       | PANASONIC                                     | 130K     | RESISTOR; 0603; 130KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                          |
|     75 | R49                                                     | -         |     1 | CRCW0603191KFK                                                                     | VISHAY DALE                                   | 191K     | RESISTOR; 0603; 191KΩ; 1%; 100PPM; 0.10W; METAL FILM                                                          |
|     76 | R53                                                     | -         |     1 | CRCW060322R1FK                                                                     | VISHAY DALE                                   | 22.1     | RESISTOR; 0603; 22.1Ω; 1%; 100PPM; 0.10W; THICK FILM                                                          |
|     77 | R54                                                     | -         |     1 | CRCW060313K0FK; ERJ-3EKF1302                                                       | VISHAY DALE; PANASONIC                        | 13K      | RESISTOR, 0603, 13KOHMS, 1%, 100PPM, 0.1W, THICK FILM                                                         |
|     78 | R55, R76, R77, R86, R88, R90-R92, R103                  | -         |     9 | CRCW06032K70FK; ERJ-3EKF2701                                                       | VISHAY DALE; PANASONIC                        | 2.7K     | RESISTOR, 0603, 2.7KΩ, 1%, 100PPM, 0.10W, THICK FILM                                                          |
|     79 | R56                                                     | -         |     1 | CRCW0603158KFK; ERJ-3EKF1583                                                       | VISHAY DALE; PANASONIC                        | 158K     | RESISTOR; 0603; 158KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                          |
|     80 | R58                                                     | -         |     1 | CRCW06032000FK                                                                     | VISHAY DALE                                   | 200      | RESISTOR; 0603; 200Ω; 1%; 100PPM; 0.10W; THICK FILM                                                           |
|     81 | R63, R64, R104, R105                                    | -         |     4 | PATT1206E50R0BG                                                                    | VISHAY                                        | 50       | RES; SMT (1206); 50; 0.1% ; ±25PPM/°K; 0.4W                                                                   |
|     82 | R65, R70, R93, R98                                      | -         |     4 | TNPW060339K0BE                                                                     | VISHAY                                        | 39K      | RES; SMT (0603); 39K; 0.1% ; ±25PPM/°K; 0.125W                                                                |
|     83 | R66-R69, R71-R74, R94-R97, R99-R102                     | -         |    16 | CRCW08054K99FKEAHP                                                                 | VISHAY                                        | 4.99K    | RES; SMT (0805); 4.99K; 1%; ±100PPM/°C; 0.5W                                                                  |
|     84 | R89                                                     | -         |     1 | CRCW06034K70FK                                                                     | VISHAY DALE                                   | 4.7K     | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                           |
|     85 | R110                                                    | -         |     1 | CRCW12060000Z0EAHP                                                                 | VISHAY                                        | 0        | RES; SMT (1206); 0; JUMPER; JUMPER; 0.75W                                                                     |
|     86 | SU1-SU12                                                | -         |    12 | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON; KYCON; SULLINS ELECTRONICS CORP.       | SX1100-B | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT;PHOSPHOR BRONZE CONTACT = GOLD PLATED |

│

Evaluates: MAX22007

## MAX22007 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                  | DNI/DNP   |   QTY | MFG PART #                                                         | MANUFACTURER                          | VALUE                 | DESCRIPTION                                                                                                              |
|--------|--------------------------|-----------|-------|--------------------------------------------------------------------|---------------------------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------|
| 87     | SW1                      | -         |     1 | 219-8MST                                                           | CTS                                   | 219-8MST              | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION = 1000MΩ                    |
| 88     | T1                       | -         |     1 | 750343182                                                          | WURTH ELECTRONICS INC.                | 750343182             | EVKIT PART -TRANSFORMER; 1:1; SMT-10                                                                                     |
| 89     | U1                       | -         |     1 | MAX22007ETN+                                                       | MAXIM                                 | MAX22007ETN+          | EVKIT PART - IC; RX11; PACKAGE OUTLINE DRAWING: 21-0135; PACKAGE LAND PATTERN: 90-0047; PACKAGE CODE: T5688-3; TQFN56-EP |
| 90     | U2                       | -         |     1 | MAX1556ETB+                                                        | MAXIM                                 | MAX1556ETB+           | IC; CONV; PWM STEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X3                                                                   |
| 91     | U3                       | -         |     1 | 93LC66BT-I/OT                                                      | MICROCHIP                             | 93LC66BT-I/OT         | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                           |
| 92     | U4                       | -         |     1 | FT2232HQ                                                           | FUTURE TECHNOLOGY DEVICES INTL LTD.   | FT2232HQ              | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; QFN64-EP                                                        |
| 93     | U5                       | -         |     1 | SST25VF020B-80-4I-SAE                                              | MICROCHIP                             | SST25VF020B-80-4I-SAE | IC; MMRY; 2 MBIT SPI SERIAL FLASH MEMORY; NSOIC8                                                                         |
| 94     | U6                       | -         |     1 | MAX22445FAWE+                                                      | MAXIM                                 | MAX22445FAWE+         | IC; DISO; REINFORCED; FAST; LOW-POWER; FOUR CHANNEL DIGITAL ISOLATOR; WSOIC16; 300MIL                                    |
| 95     | U7                       | -         |     1 | MAX22446CAWE+                                                      | MAXIM                                 | MAX22446CAWE+         | IC; DISO; REINFORCED; FAST; LOW-POWER; FOUR CHANNEL DIGITAL ISOLATOR; WSOIC16; 300MIL                                    |
| 96     | U8                       | -         |     1 | MAX17690ATE+                                                       | MAXIM                                 | MAX17690ATE+          | IC; CTRL; 60V; NO-OPTO ISOLATED FLYBACK CONTORLLER; TQFN16-EP                                                            |
| 97     | U9, U10                  | -         |     2 | MAX17532ATB+                                                       | MAXIM                                 | MAX17532ATB+          | IC; CONV; 42V; 0.1A; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X2                  |
| 98     | U11                      | -         |     1 | MAX6126AASA25+                                                     | MAXIM                                 | MAX6126AASA25+        | IC; VREF; ULTRA HIGH PRECISION; ULTRA LOW NOISE VOLTAGE REFERENCE; SOIC8 150MIL; VOUT = 2.5V, 3PPM/°C MAX TEMPCO; NSOIC8 |
| 99     | X1                       | -         |     1 | ZX62RD-AB-5P8(30)                                                  | HIROSE ELECTRIC CO LTD.               | ZX62RD-AB-5P8(30)     | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS          |
| 100    | Y1                       | -         |     1 | ABM7-12.000MHZ-D2Y-T                                               | ABRACON                               | 12MHZ                 | CRYSTAL; SMT ; 18PF; 12MHZ; ±20PPM; ±30PPM                                                                               |
| 101    | PCB                      | -         |     1 | MAX22007                                                           | MAXIM                                 | PCB                   | PCB:MAX22007                                                                                                             |
| 102    | C40                      | DNP       |     0 | TAJV226K050RNJ                                                     | AVX                                   | 22µF                  | CAP; SMT (7361); 22µF; 10%; 50V; TANTALUM CHIP                                                                           |
| 103    | C47                      | DNP       |     0 | C1608C0G2A221J080AA                                                | TDK                                   | 220PF                 | CAP; SMT (0603); 220PF; 5%; 100V; C0G; CERAMIC CHIP                                                                      |
| 104    | C53                      | DNP       |     0 | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A | MURATA; SAMSUNG ELECTRONICS; TAIYO YU | 10UF                  | CAPACITOR; SMT (1210); CERAMIC CHIP; 10µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                |
| 105    | C100, C101               | DNP       |     0 | DK1E3EA102M86RAH01                                                 | MURATA                                | 1000PF                | CAP; SMT; 1000PF; 20%; 250V; E; CERAMIC CHIP                                                                             |
| 106    | C48                      | DNP       |     0 | N/A                                                                | N/A                                   | OPEN                  | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                 |
| 107    | C103                     | DNP       |     0 | N/A                                                                | N/A                                   | OPEN                  | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                 |
| 108    | R24, R25, R60, R62, R107 | DNP       |     0 | N/A                                                                | N/A                                   | OPEN                  | PACKAGE OUTLINE 0603 RESISTOR                                                                                            |
| 109    | R45                      | DNP       |     0 | N/A                                                                | N/A                                   | OPEN                  | PACKAGE OUTLINE 1206 RESISTOR                                                                                            |
| 110    | R111                     | DNP       |     0 | N/A                                                                | N/A                                   | OPEN                  | PACKAGE OUTLINE 2512 RESISTOR                                                                                            |
| 111    | R112                     | DNP       |     0 | N/A                                                                | N/A                                   | OPEN                  | PACKAGE OUTLINE 0805 RESISTOR                                                                                            |
|        | TOTAL                    |           |   336 |                                                                    |                                       |                       |                                                                                                                          |

│

Evaluates: MAX22007

## MAX22007 EV Kit Schematic Diagrams

<!-- image -->

Evaluates: MAX22007

## MAX22007 EV Kit Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX22007

## MAX22007 EV Kit Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX22007

## MAX22007 EV Kit Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX22007

## MAX22007 EV Kit PCB Layout Diagrams

MAX22007 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

Evaluates: MAX22007

│

## MAX22007 EV Kit PCB Layout Diagrams (continued)

MAX22007 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX22007

│

## MAX22007 EV Kit PCB Layout Diagrams (continued)

MAX22007 EV Kit PCB Layout-Layer 2

<!-- image -->

Evaluates: MAX22007

│

## MAX22007 EV Kit PCB Layout Diagrams (continued)

MAX22007 EV Kit PCB Layout-Layer 3

<!-- image -->

Evaluates: MAX22007

│

## MAX22007 EV Kit PCB Layout Diagrams (continued)

MAX22007 EV Kit PCB Layout-Layer 4

<!-- image -->

Evaluates: MAX22007

│

## MAX22007 EV Kit PCB Layout Diagrams (continued)

MAX22007 EV Kit PCB Layout-Layer 5

<!-- image -->

Evaluates: MAX22007

│

## MAX22007 EV Kit PCB Layout Diagrams (continued)

MAX22007 EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX22007

│

## MAX22007 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX22007 EV Kit PCB Layout-Bottom Silkscreen

Evaluates: MAX22007

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX22007