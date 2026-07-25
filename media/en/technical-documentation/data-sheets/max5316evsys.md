<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5316 Evaluation System

## Evaluates: MAX5316

## General Description

The MAX5316 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX5316  16-bit  high-accuracy voltage output DAC. The EV kit also includes Windows XP ® -,  Windows  Vista ® -,  and  Windows ® 7-compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC.

The  MAX5316  evaluation  system  (EV  system)  consists of  the  EV  kit  and  a  companion  MAXUSB2XILINXMB serial interface board. The MAXUSB2XILINXMB interface board allows a PC to control the SPI interface and GPIOs using its USB port. Order the EV system for a complete PC-based evaluation of the IC.

The  EV  system  includes  an  on-board  direct  digital synthesizer  (DDS)  that  generates  precision  waveforms (sine,  triangle,  rising  ramp,  falling  ramp,  square,  and arbitrary). The DDS clock can be selected from 375kHz to  10kHz.  Waveform  amplitude  and  offset  can  be controlled by the DDS or the internal controls of the IC. Arbitrary waveforms are defined by a simple CSV file that can easily be created from Excel or many other software programs. A synchronization output is also provided to indicate when a new cycle starts. In addition, all waveforms can be synchronized to an external signal.

The EV kit comes with a 16-bit MAX5316GTG+ precision DAC installed.

## Features

- S On-Board Direct Digital Synthesis (Xilinx ® Spartan ® -3A FPGA)
- S On-Board Waveform Memory (1M x 24-Bit SRAM)
- S On-Board +4.096V Ultra-High-Precision Voltage Reference (MAX6126)
- S SMA Connectors for Waveform Synchronization and DAC Output
- S Proven High-Performance 16-Bit DAC PCB Layout
- S Stand-Alone and GUI Operation Modes
- S Eight Diagnostic LEDs
- S Five Pushbuttons for Functionality Tests
- S High-Speed SPI Interface
- S High-Speed USB 2.0 USB-PC Connection (Cable Included)
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S RoHS Compliant
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## System Diagram

<!-- image -->

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

Xilinx and Spartan are registered trademarks of Xilinx Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4 or visit Maxim's website at www.maxim-ic.com.

## MAX5316 Evaluation System

## Evaluates: MAX5316

## Component Lists

## MAX5316 EV System

| PART             |   QTY | DESCRIPTION            |
|------------------|-------|------------------------|
| MAX5316EVKIT#    |     1 | MAX5316 EV kit         |
| MAXUSB2XILINXMB# |     1 | Serial interface board |

## MAX5316 EV Kit

* EP = Exposed pad.

| DESIGNATION                      |   QTY | DESCRIPTION                                                                |
|----------------------------------|-------|----------------------------------------------------------------------------|
| JU1, JU2                         |     2 | 2-pin headers                                                              |
| JU3, JU4, JU6                    |     3 | 3-pin headers                                                              |
| JU5                              |     1 | 5-pin header                                                               |
| R1, R5, R9-R30                   |    24 | 22 I Q 5% resistors (0402)                                                 |
| R2                               |     1 | 100k I Q 5% resistor (0603)                                                |
| R3                               |     1 | 10k I Q 5% resistor (0603)                                                 |
| R4                               |     1 | 1k I Q 5% resistor (0603)                                                  |
| R6                               |     1 | 0 I Q 5% resistor (0603)                                                   |
| R7                               |     1 | 12.4k I Q 1% resistor (0603)                                               |
| R8                               |     1 | 10k I Q 1% resistor (0603)                                                 |
| TP1, TP2, TP3, TP8               |     4 | Orange multipurpose test points                                            |
| TP4, TP5, TP10                   |     3 | Red multipurpose test points                                               |
| TP6, TP9, TP11, TP25, TP26, TP27 |     6 | Black multipurpose test points                                             |
| TP7                              |     1 | White multipurpose test point                                              |
| TP12-TP24                        |    13 | Orange miniature test points                                               |
| U1                               |     1 | 16-bit DAC (24 TQFN-EP*) Maxim MAX5316GTG+                                 |
| U2                               |     1 | +4.096V ultra-high-precision voltage reference (8 SO) Maxim MAX6126AASA41+ |
| U4                               |     1 | SPI serial flash (8 SO8W)                                                  |
| U5                               |     1 | Negative output LDO (5 SOT23) Maxim MAX1735EUK30+                          |
| U6, U7, U8                       |     3 | 2-bit level translators (8 SSOP)                                           |
| U9                               |     1 | 8-bit level translator (24 TSSOP)                                          |
| U10                              |     1 | 300mA LDO (6 SOT23) Maxim MAX1983EUT+                                      |
| -                                |     6 | Shunts                                                                     |
| -                                |     1 | PCB: MAX5316 EVALUATION KIT                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                                                     |   QTY | DESCRIPTION                                                             |
|-----------------------------------------------------------------|-------|-------------------------------------------------------------------------|
| C1, C5, C14, C15, C16, C19, C21, C23, C30-C37                   |    16 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K  |
| C2, C4, C6, C8, C17, C20, C27, C28, C29, C63                    |    10 | 0.01 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C103K |
| C3, C9, C10, C11, C38, C39, C40                                 |     7 | 1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K    |
| C7, C60                                                         |     2 | 100pF Q 5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H101J     |
| C12, C22, C42, C44, C46, C48, C50, C52, C55, C56, C58, C62, C65 |    13 | 180pF Q 5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H181J     |
| C13, C41, C43, C45, C47, C49, C51, C53, C54, C57, C59, C61, C64 |    13 | 1000pF Q 5%, 50V C0G ceramic capacitors (0402) Murata GRM155R71H102J    |
| C18                                                             |     1 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K  |
| C24, C25, C26                                                   |     3 | 10 F F Q 10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A106K   |
| D1                                                              |     1 | 30V, 500mA Schottky diode (SOD-123)                                     |
| FB1-FB8                                                         |     8 | 600 I Q 25% 500mA ferrite beads (0603) TDK MMZ1608B601C                 |
| J1                                                              |     1 | 50 I SMA connector, vertical mount                                      |
| J2                                                              |     1 | Self-mating hermaphroditic strip (2x20)                                 |

<!-- image -->

- MAX5316 EV kit
- MAXUSB2XILINXMB  interface  board  (USB  cable included)
- Windows XP, Windows Vista, or Windows 7 PC with a spare USB port
- Power supply, +5V DC at 600mA
- Power supply, -5V DC at 100mA
- Oscilloscope

Note: The EV system has two operation modes: standalone mode and GUI mode. See the Detailed Description of Hardware section for operation mode details.

## Stand-Alone Mode Procedure

- 1) Verify  that  the  jumpers  on  the  MAXUSB2XILINXMB interface  board  are  in  their  default  positions,  as shown in Table 3.
- 2) Verify that the jumpers on the EV kit board are in their default positions, as shown in Table 4.
- 3) Connect the EV kit board to the MAXUSB2XILINXMB interface board.
- 4) Connect  +5V  DC  power  supply  to  MAXUSB2XILINXMB between TP1 (+5V) and TP2 (GND). Keep power off.
- 5) Connect +5V DC power supply to EV kit between TP5 (+5V) and TP6 (AGND). Keep power off.

<!-- image -->

## MAX5316 Evaluation System

## Evaluates: MAX5316

## Component Suppliers

| SUPPLIER                              | PHONE        | WEBSITE                     |
|---------------------------------------|--------------|-----------------------------|
| Murata Electronics North America Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                             | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX5316 when contacting these component suppliers.

## MAX5316 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX5316EVKIT.EXE        | Application program                        |
| CDM20600.EXE            | Installs the USB device driver             |
| UNINSTALL.EXE           | Uninstalls the EV kit software             |
| USB_Driver_Help_200.PDF | USB driver installation help file          |

## Quick Start

## Required Equipment

- 6) Connect -5V DC power supply to EV kit between TP7 (-5V) and TP6 (AGND). Keep power off.
- 7) Connect oscilloscope probe 1 to EV kit SMA connector J1 or test point TP1 (OUT).
- 8) Turn  on  the  power  supplies  for  the  EV  kit  board first. Then turn on the power  supply for the MAXUSB2XILINXMB board.
- 9) Observe that the DAC outputs a sine wave of 1kHz, amplitude range is 0 to 4.096V.
- 10)  Press  and  release  SW3  to  select  between  8  sine waveforms with different frequencies. A single LED from LED4-LED11 is turned on, indicating a different frequency as shown in Table 1.
- 11)  Press  and  release  SW4  to  select  between  8  sine waveforms with different frequencies. A single LED from LED4-LED11 is turned off, indicating a different frequency as shown in Table 2.
- 12)  Press  SW5  to  toggle  TC/ SB logic  level.  By  default, TC/ SB =  high  and  the  DDS  output  is  set  to  two's complement  format.  If  TC/ SB = low, the sine waveform is distorted.
- 13)  Press SW1 (RESET) to reset the MAXUSB2XILINXMB board and the EV kit board.

## GUI Mode Procedure

Note  1: In  the  GUI  mode  operation,  the  stand-alone mode  functions  as  described  in  the  previous  section. The user can exercise more features of the EV kit using

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5316 Evaluation System

## Evaluates: MAX5316

## Table 1. LED4-LED11 Relationship With DAC Output Frequency Controlled by SW3

| SINGLE LED TURNED ON   |   PINC VALUE |   DAC OUTPUT SINE WAVEFORM FREQUENCY (Hz) |
|------------------------|--------------|-------------------------------------------|
| LED4                   |       83,886 |                                999.999046 |
| LED5                   |       83,968 |                               1000.976563 |
| LED6                   |       38,858 |                                463.223457 |
| LED7                   |          419 |                                  4.994869 |
| LED8                   |      838,861 |                              10000.002384 |
| LED9                   |      838,912 |                              10000.610351 |
| LED10                  |       65,536 |                                781.250000 |
| LED11                  |          256 |                                  3.051758 |

## Table 2. LED4-LED11 Relationship With DAC Output Frequency Controlled by SW4

| SINGLE LED TURNED OFF   |   PINC VALUE |   DAC OUTPUT SINE WAVEFORM FREQUENCY (Hz) |
|-------------------------|--------------|-------------------------------------------|
| LED4                    |    1,048,576 |                              12500.000000 |
| LED5                    |       262144 |                               3125.000000 |
| LED6                    |       65,536 |                                781.250000 |
| LED7                    |       16,384 |                                195.312500 |
| LED8                    |         4096 |                                 48.828125 |
| LED9                    |         1024 |                                 12.207031 |
| LED10                   |          256 |                                  3.051758 |
| LED11                   |           64 |                                  0.762939 |

the  GUI  mode.  Each  time  when  the  operation  mode  is to be changed, a user needs to press and release SW1 (RESET) on the MAXUSB2XILINXMB board to reset the EV  system  and  then  follow  the  procedures  for  each operation mode.

Note 2: In the following sections, software-related items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

- 1) Visit www.maxim-ic.com/evkitsoftware to download the latest version of the EV kit software, 5316Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install  the  EV  kit  software  and  USB  driver  on  your computer  by  running  the  INSTALL.EXE  program inside  the  temporary  folder.  The  program  files  are copied  to  your  PC  and  icons  are  created  in  the Windows Start  |  Programs menu.  During  software installation,  some  versions  of  Windows  may  show a  warning  message  indicating  that  this  software is  from  an  unknown  publisher.  This  is  not  an  error condition and it is safe to proceed with installation. Administrator  privileges  are  required  to  install  the USB device driver on Windows.
- 3) Verify  that  the  jumpers  on  the  MAXUSB2XILINXMB interface  board  are  in  their  default  positions,  as shown in Table 3.
- 4) Verify that the jumpers on the EV kit board are in their default positions, as shown in Table 4.
- 5) Connect the EV kit board to the MAXUSB2XILINXMB interface board.
- 6) Connect +5V DC power supply to the MAXUSB2XILINXMB  interface  board  between  TP1 (+5V) and TP2 (GND). Keep power off.
- 7) Connect +5V DC power supply to EV kit between TP5 (+5V) and TP6 (AGND). Keep power off.
- 8) Connect -5V DC power supply to EV kit between TP7 (-5V) and TP6 (AGND). Keep power off.
- 9) Connect oscilloscope probe 1 to EV kit SMA connector J1 or test point TP1 (OUT).
- 10)  Connect the oscilloscope probe 2 to EV kit test point TP20 ( CS ).
- 11)  Connect the oscilloscope probe 3 to EV kit test point TP19 (SCLK).
- 12)  Connect the oscilloscope probe 4 to EV kit test point TP18 (DIN).

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5316 Evaluation System

## Evaluates: MAX5316

- 13)  Turn  on  the  power  supplies  for  the  EV  kit  board first. Then turn on the power  supply for the MAXUSB2XILINXMB interface board.
- 14)  Observe that the DAC outputs a sine wave of 1kHz, amplitude range is 0 to 4.096V.
- 15)  Connect the USB  cable from the PC  to the MAXUSB2XILINX interface board. A Windows message appears when connecting the MAXUSB2XILINX board  to  the  PC  for  the  first  time.  Each  version  of Windows  has  a  slightly  different  message.  If  you see  a  Windows  message  stating ready  to  use , then proceed to the next step. Otherwise, open the USB\_Driver\_Help\_200.PDF document in the Windows Start | Programs menu to verify the USB driver was installed successfully.
- 16)  Start  the  EV  kit  software  by  opening  its  icon  in the  Windows Start  |  Programs menu.  The  EV kit  software  main  window  appears,  as  shown  in Figure  2.  Within  5s,  the  software  should  automatically connect  to the hardware; verify that MAX5316EVKIT Hardware  Connected appears  in the bottom-left status bar.
- 17)  Observe the IC OUT waveform is a 1kHz sine wave.
- 18)  Drag the Frequency track  bar  up and observe the output Frequency increases.

<!-- image -->

Figure 1. MAX5316 EV Kit Jumper Locations

<!-- image -->

Figure 2. MAX5316 EV Kit Software Main Window (Block Diagram Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5316 Evaluation System

## Evaluates: MAX5316

## Detailed Description of Software

The  main  window  of  the  evaluation  software  (shown  in Figure  1)  displays  the  MAXUSB2XILINXMB  DDS  signal  generator  on  the  left  side  of  the  window,  and  the MAX5316 DAC on the right side.

When DAC  Data  Source is  set  to DDS ,  the  IC's  DIN register is driven by the DDS signal generator. The output frequency is controlled by the Frequency track bar, or by typing the output frequency value into its edit field and pressing enter. The sample update rate is controlled by the Update Frequency drop-down list.

The  DDS  output  waveform  frequency  is  calculated  as follows:

<!-- formula-not-decoded -->

where fUPDATE is the DDS update frequency, PINC is the DDS phase increment. The DDS is implemented with a 24-bit phase accumulator.

The gain and offset of the DDS output waveform can be adjusted by the Gain and Offset track bars in the DDS section of the GUI.

The shape of the waveform is selected by the Waveform group box. The SPI clock frequency is selectable under the Advanced menu.  Selecting  a  slower  SPI  clock frequency may limit the available update frequency.

When DAC Data Source is  set  to SPI/Direct ,  the  IC's DIN register is driven by the controls on the right side of the window. Write the DIN register by dragging its track bar, or by typing numbers into the DIN edit field.

When  the  MAXUSB2XILINXMB  is  powered  up  and connected  to  the  computer's  USB  port,  the  software automatically connects and configures the IC to enable data output. This can be prevented by unchecking the Advanced menu  item's Connect  Automatically and Enable DOUT After Connecting .

## Arbitrary Waveform Generation

The  DDS  can  accept  user-defined  arbitrary  waveform data  stored  in  a  comma-separated  values  (CSV)  file. There are 1,048,576 samples stored in the file, representing  one  cycle  of  the  arbitrary  waveform.  The sample data are 18-bit decimal values with 0 representing zero scale and 262,143 representing full scale. Click the File menu  item's Load  Arbitrary  Waveform… to download the  waveform  to  the  DDS  and  stream  to  the DAC.

A staircase waveform  is stored in the system  at power-up.

<!-- image -->

## Detailed Description of Hardware

The MAX5316 EV kit can operate in two modes: standalone and GUI.

The stand-alone mode is for quick IC functionality  demonstration  purpose  only.  In  this  mode,  the MAXUSB2XILINXMB  interface  board  generates  one  of 16 predefined digital signals using the DDS implemented on the FPGA.

Press  and  release  SW3  to  select  between  eight  sine waveforms with different frequencies. A single LED from LED4-LED11 is turned on, indicating a different frequency as shown in Table 1.

Press  and  release  SW4  to  select  between  eight  sine waveforms with different frequencies. A single LED from LED4-LED11 is turned off, indicating a different frequency, as shown in Table 2.

In the stand-alone mode, the DAC is updated at 200kHz, the SPI clock speed is set at 10MHz.

The  GUI  mode  is  for  a  complete  feature  exercise of  the  IC  through  a  PC.  The  user  can  explore  many different application cases (e.g., DAC update frequencies, DAC output waveforms, DAC register settings, and DAC interface speed selections, etc).

The  EV  kit  provides  a  proven  layout  for  the  16-bit  highprecision voltage output DAC. An on-board +4.096V voltage reference (MAX6126) is provided. Contact Maxim for other high-precision voltage references if reference voltages other than +4.096V are required.

## SYNC\_IN and SYNC\_OUT Signals

There  is  an  SMA  connector  (J5)  labeled  INPUT  and another  SMA  connector  (J4)  labeled  OUTPUT  on  the MAXUSB2XILINXMB interface board. The INPUT signal is  called  SYNC\_IN  and  the  OUTPUT  signal  is  called SYNC\_OUT, respectively.

The  SYNC\_IN  signal  is  applied  to  the  Schmitt-trigger input  and  the  Schmitt-trigger  output  is  applied  to  the FPGA  DDS  module.  SYNC\_IN  is  used  to  implement  a simple 'crash lock' for the DDS signal generator. At the rising edge of the SYNC\_IN clock, the DDS resets itself and  the  DDS  phase  accumulator  is  reset  to  the  POFF value written by the GUI (default to 0).

The SYNC\_OUT signal shows when the generated waveform starts a new cycle.

Set the SYNC\_In\_Out\_Width register bit 31 to 1 to enable the  SYNC\_IN  signal.  Set  the  bit  to  0  to  disable  the SYNC\_IN signal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5316 Evaluation System

## Evaluates: MAX5316

Set the SYNC\_In\_Out\_Width register bit 30 to 1 to enable the  SYNC\_OUT  signal.  Set  the  bit  to  0  to  disable  the SYNC\_OUT signal.

Set  the  SYNC\_In\_Out\_Width  register  bit  29  to  bit  0  to control the SYNC\_OUT pulse width:

SYNC\_OUT pulse width = SYNC\_In\_Out\_Width[29:0] x 10ns

When SYNC\_In\_Out\_Width[29:0] = 0, SYNC\_OUT, pulse width = 10ns.

## Pushbuttons on the MAXUSB2XILINXMB Interface Board

There are five pushbuttons (SW1-SW5) on the MAXUSB2XILINXMB interface board. Their functions are described as follows:

FPGA  Reconfigure  Button  (SW1): Press  and  release this button to reconfigure the FPGA and the whole interface board.

CPU Reset Button (SW2): Press and release this button to  reset  the  embedded  Microblaze  microcontroller  and the interface board.

Sinusoid  Frequency-Select  Button  (SW3): Press  and release  this  button  to  select  between  eight  sine  waveforms  with  different  frequencies.  A  single  LED  from LED4-LED11 is turned on, indicating a different frequency as shown in Table 1.

Sinusoid  Frequency-Select  Button  (SW4): Press  and release  this  button  to  select  between  eight  sine  waveforms  with  different  frequencies.  A  single  LED  from LED4-LED11 is turned off, indicating a different frequency as shown in Table 2.

TC/ SB IC Pin Logic-Level Select Button (SW5): Press and release this button to toggle the TC/ SB pin logic. After the FPGA reconfiguration or the embedded MicroBlaze microcontroller reset, the TC/ SB pin is logic-high and the DDS output is set to two's-complement format. If TC/ SB = low, the sine waveform is distorted.

Table 3. MAXUSB2XILINXMB Interface Board Jumper Descriptions (JU1-JU13)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                        |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2              | IOVDD = 1.8V from U9. Do not use.                                                                                  |
| JU1      | 1-3*             | IOVDD = 3.3V from U7.                                                                                              |
| JU1      | 1-4              | IOVDD = external user-supplied IOVDD from test point TPEXTIOVDD. Note restriction 1.1V < IOVDD < 3.6V. Do not use. |
| JU2      | Pin 1 only*      | FPGA mode signal M0 = 1.                                                                                           |
| JU2      | 1-2              | FPGA mode signal M0 = 0. Do not use.                                                                               |
| JU3      | Pin 1 only       | FPGA mode signal M1 = 1. Do not use.                                                                               |
| JU3      | 1-2*             | FPGA mode signal M1 = 0.                                                                                           |
| JU4      | Pin 1 only       | FPGA mode signal M2 = 1. Do not use.                                                                               |
| JU4      | 1-2*             | FPGA mode signal M2 = 0.                                                                                           |
| JU5      | Pin 1 only*      | FPGA VS2 = 1.                                                                                                      |
| JU5      | 1-2              | FPGA VS2 = 0. Do not use.                                                                                          |
| JU6      | Pin 1 only*      | FPGA VS1 = 1.                                                                                                      |
| JU6      | 1-2              | FPGA VS1 = 0. Do not use.                                                                                          |

<!-- image -->

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                           |
|----------|------------------|-------------------------------------------------------------------------------------------------------|
| JU7      | Pin 1 only*      | FPGA VS0 = 1.                                                                                         |
| JU7      | 1-2              | FPGA VS0 = 0. Do not use.                                                                             |
| JU8      | 1-2*             | HOLD1 is connected to ground.                                                                         |
| JU8      | 2-3              | HOLD2 is connected to ground.                                                                         |
| JU9      | 1-2*             | U7 powers the 3.3V supply rail.                                                                       |
| JU9      | Open             | Measure the MAXUSB2XILINXMB 3.3V supply current by putting a current meter in series with the jumper. |
| JU10     | 1-2*             | U8 powers the 0.9V supply rail.                                                                       |
| JU10     | Open             | Measure the MAXUSB2XILINXMB 0.9V supply current by putting a current meter in series with the jumper. |
| JU11     | 1-2*             | U10 powers the 1.2V supply rail.                                                                      |
| JU11     | Open             | Measure the MAXUSB2XILINXMB 1.2V supply current by putting a current meter in series with the jumper. |
| JU12     | 1-2*             | U9 powers the 1.8V supply rail.                                                                       |
| JU12     | Open             | Measure the MAXUSB2XILINXMB 1.8V supply current by putting a current meter in series with the jumper. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5316 Evaluation System

## Evaluates: MAX5316

## Table 3. MAXUSB2XILINXMB Interface Board Jumper Descriptions (JU1-JU13) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                  |
|----------|------------------|----------------------------------------------------------------------------------------------|
| JU13     | 1-2*             | Power U7-U10 from external user- supplied +5V DC supply (from test point TP1).               |
| JU13     | 2-3              | Power U7-U10 from the USB (for FPGA configurations with sufficiently low power). Do not use. |
| JUTCK    | 1-2              | Do not use.                                                                                  |
| JUTCK    | 2-3              | Do not use.                                                                                  |
| JUTCK    | Pin 1 only*      | USB bridge does not drive J2 or J3.                                                          |

| JUMPER   | SHUNT POSITION   | DESCRIPTION                         |
|----------|------------------|-------------------------------------|
| JUTDI    | 1-2              | Do not use.                         |
| JUTDI    | 2-3              | Do not use.                         |
| JUTDI    | Pin 1 only*      | USB bridge does not drive J2 or J3. |
| JUTDO    | 1-2              | Do not use.                         |
| JUTDO    | 2-3              | Do not use.                         |
| JUTDO    | Pin 1 only*      | USB bridge does not drive J2 or J3. |
| JUTMS    | 1-2              | Do not use.                         |
| JUTMS    | 2-3              | Do not use.                         |
| JUTMS    | Pin 1 only*      | USB bridge does not drive J2 or J3. |

## Table 4. EV Kit Jumper Descriptions (JU1-JU6)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                     |
|----------|------------------|-------------------------------------------------|
| JU1      | 1-2*             | AVDD is connected to TP5 (+5V).                 |
| JU1      | Pin 1 only       | AVDD is connected to external supply on TP4.    |
| JU2      | 1-2*             | RFB is connected to OUT.                        |
| JU2      | Pin 1 only       | RFB is disconnected from OUT.                   |
| JU3      | 1-2              | AVSS is connected to analog ground.             |
| JU3      | 2-3*             | AVSS is connected to on-board -1.25V reference. |
| JU4, JU6 | 1-2*             | REF is connected to on-board +4.096V reference. |
| JU4, JU6 | 2-3              | REF is connected to external reference on TP8.  |

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                    |
|----------|------------------|------------------------------------------------|
| JU5      | 1-2              | VDDIO is connected to 1.8V power supply.       |
| JU5      | 1-3*             | VDDIO is connected to 3.3V power supply.       |
| JU5      | 1-4              | VDDIO is connected to 5V power supply.         |
| JU5      | 1-5              | VDDIO is connected to external supply on TP10. |

## MAX5316 Evaluation System

## Evaluates: MAX5316

<!-- image -->

Figure 3. MAX5316 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5316 Evalution System

Figure 4. MAX5316 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evalutes: MAX5316

Figure 5. MAX5316 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 6. MAX5316 EV Kit PCB Layout-Ground Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5316 Evalution System

<!-- image -->

Figure 7. MAX5316 EV Kit PCB Layout-Power Layer 3

<!-- image -->

## Evalutes: MAX5316

Figure 8. MAX5316 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART          | TYPE      |
|---------------|-----------|
| MAX5316EVSYS# | EV System |

# Denotes RoHS compliant.

12

## MAX5316 Evaluation System

## Evaluates: MAX5316

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.