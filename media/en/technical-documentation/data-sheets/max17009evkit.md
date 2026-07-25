<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX17009 evaluation kit (EV kit) demonstrates the high-power, dynamically adjustable, dual-phase notebook CPU application circuit for AMD ® mobile serial VID interface (SVI) CPU core supplies. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage CPU core. The MAX17009 EV kit meets the AMD mobile SVI CPU's transient voltage specification, power-good signaling,  voltage-regulator  thermal  monitoring ( VRHOT ),  and  power-good output (PWRGD). The MAX17009 EV kit consists of the MAX17009 dualphase,  interleaved  fixed-frequency  step-down controller, configured for separate mode operation, and a reference buffer. The switching regulators (SMPSs) provide power to two independent CPU cores, while the reference buffer output (NBV\_BUF) sets the voltage regulation level for a north bridge (NB) regulator, completing  the  total  CPU  cores  and  NB  power requirements.

Output voltages are dynamically changed through a 2-wire serial interface, allowing the SMPS and the NBV\_BUF to be individually programmed to different voltages. A programmable slew-rate controller enables controlled upward transitions between VID codes for the switching regulators, while the slew rate for the reference buffer is set by an external capacitor.

Soft-start  limits  the  inrush  current,  and  soft-shutdown brings the output voltage back down to zero without any negative ring. The MAX17009 EV kit includes active voltage positioning with adjustable gain, reducing power dissipation and bulk output capacitance requirements. The MAX17009 includes latched output undervoltage fault, overvoltage fault protection, and thermaloverload protection. It also includes a voltage-regulator power-good (PWRGD) output.

This fully assembled and tested printed circuit board (PCB) provides a digitally adjustable 0 to 1.550V output voltage range (7-bit on-board DAC) from a 7V to 24V battery  input  range. Each phase delivers up to 18A output current for a total of 36A. The EV kit operates at 300kHz switching frequency (per phase) and has superior lineand load-transient response. The EV kit also includes Windows ® 2000/XP-compatible software, which provides a simple graphical user interface (GUI) for exercising the features of the MAX17009.

AMD is a registered trademark of Advanced Micro Devices, Inc. Windows is a registered trademark of Microsoft Corp.

## Features

- ♦ Dual Output, Fast-Response Interleaved Fixed Frequency
- ♦ AMD Mobile SVI-Compliant Serial Interface
- ♦ Separate or Combinable Outputs Detected at Power-Up
- ♦ Reference Buffer Output
- ♦ Dynamic Phase Selection Optimizes Active/Sleep Efficiency
- ♦ Transient Phase Repeat Reduces Output Capacitance
- ♦ Active Voltage Positioning with Adjustable Gain
- ♦ High Speed, Accuracy, and Efficiency
- ♦ Low-Bulk Output Capacitor Count
- ♦ 7V to 24V Input-Voltage Range
- ♦ 0 to 1.550V Output-Voltage Range (7-Bit On-Board DAC)
- ♦ 36A Load-Current Capability (18A Each Phase)
- ♦ Accurate Current Balance and Current Limit
- ♦ 300kHz Switching Frequency (per Phase)
- ♦ Power-Good (PWRGD) and Thermal-Fault ( VRHOT ) Output Indicators
- ♦ System Power-OK (PGD\_IN) Input
- ♦ Output Overvoltage and Undervoltage Fault Protection
- ♦ 40-Pin Thin QFN Package (5mm x 5mm)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17009EVKIT+ | EV Kit |

## MAX17009 Evaluation Kit

| DESIGNATION                  |   QTY | DESCRIPTION                                                                                                  |
|------------------------------|-------|--------------------------------------------------------------------------------------------------------------|
| C1-C4                        |     4 | 10µF ±20%, 25V X5R ceramic capacitors (1210) TDK C3225X7R1E106M AVX 12103D106M Taiyo Yuden TMK325BJ106MM     |
| C5-C8                        |     4 | 470µF ±20%, 2V 6m Ω low-ESR polymer capacitors (D-case) NEC/Tokin PSGD0E477M6 or Panasonic EEFUD0D471L6      |
| C9, C44-C48, C58             |     7 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K or Murata GRM188R71E104K                    |
| C10, C19, C49, C50           |     4 | 1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C105K AVX 0603YD105MAT                              |
| C11                          |     1 | 2.2µF ±20%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A225M or Murata GRM188R61A225M or AVX 0603ZD225MAT |
| C12, C13, C14                |     3 | 0.22µF ±20%, 10V X7R ceramic capacitors (0603) Taiyo Yuden LMK107BJ224MA TDK C1608X7R1C224M AVX 06033D224KAT |
| C15, C21, C22, C59, C60      |     5 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K or Murata GRM188R71H102K or equivalent     |
| C16, C17, C18, C20, C23      |     5 | 4700pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H472K or Murata GRM188R71H472K or equivalent     |
| C24, C25                     |     2 | 2200pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H222K or Murata GRM188R71H222K or equivalent     |
| C26-C37                      |    12 | 22µF ±20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J226MT Taiyo Yuden JMK212BJ226MG                  |
| C38, C39, C41, C42, C43, C53 |     0 | Not installed, ceramic capacitors (0603)                                                                     |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                    |
|---------------|-------|----------------------------------------------------------------------------------------------------------------|
| C40           |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H332K Taiyo Yuden UMK107B332MZ                      |
| C51, C52      |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG AVX 08056D106MAT |
| C54, C55      |     2 | 22pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H220J                                                 |
| C56, C57      |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H100J                                                 |
| D1, D2        |     2 | 30V, 3A Schottky diodes Nihon EC31QS03L Central Semiconductor CMSH3-40M                                        |
| D3, D4        |     2 | LEDs, green clear SMD (0805)                                                                                   |
| J1            |     1 | USB series B right-angle PC-mount receptacle                                                                   |
| J2            |     0 | Not installed                                                                                                  |
| J4, J5        |     2 | Scope probe jacks                                                                                              |
| JU1, JU3-JU6  |     5 | 3-pin headers                                                                                                  |
| JU2           |     1 | 4-pin header                                                                                                   |
| JU7           |     1 | 2-pin header                                                                                                   |
| L1, L2        |     2 | 0.45µH, 30A 1.1m Ω power inductors TOKO FDUE1040D-R45M or NEC-Tokin MPC1040LR45                                |
| N1, N2        |     2 | n-channel MOSFETs (PowerPAK 8-pin SO) Fairchild FDS6298 (8-pin SO) Siliconix (Vishay): SI7634DP                |
| N3-N6         |     4 | n-channel MOSFETs (PowerPAK 8-pin SO) Fairchild FDS8670 (8-pin SO) Siliconix (Vishay): SI7336ADP               |
| N7, N8        |     0 | Not installed, n-channel MOSFETs (DPAK)                                                                        |
| R1, R2        |     2 | 0.001 Ω ±1%, 1W resistors (2512) Panasonic ERJM1WTF1M0U                                                        |
| R3            |     1 | 120k Ω ±1% resistor (0603)                                                                                     |
| R4            |     1 | 100k Ω ±1% resistor (0603)                                                                                     |
| R5            |     1 | 40.2k Ω ±1% resistor (0603)                                                                                    |
| R6            |     0 | Not installed, resistor-short PC trace (0603)                                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17009 Evaluation Kit

## Component List (continued)

| DESIGNATION                  |   QTY | DESCRIPTION                                                                                                          |
|------------------------------|-------|----------------------------------------------------------------------------------------------------------------------|
| R7                           |     1 | 13k Ω ±1% resistor (0603)                                                                                            |
| R8                           |     1 | 100k Ω ±5% NTC thermistor, B = 4250 (0603) Murata NCP18WF104J03RB TDK NTCG163JF104J (0402) or Panasonic ERT-J1VR104J |
| R9, R38, R39                 |     3 | 100k Ω ±5% resistors (0603)                                                                                          |
| R10                          |     1 | 143k Ω ±1% resistor (0603)                                                                                           |
| R11, R51, R53, R54, R55, R56 |     6 | 1k Ω ±5% resistors (0603)                                                                                            |
| R12, R19                     |     2 | 1.1k Ω ±1% resistors (0603)                                                                                          |
| R13, R14, R15, R20, R21      |     5 | 100 Ω ±5% resistors (0603)                                                                                           |
| R16, R36                     |     2 | 51 Ω ±5% resistors (0603)                                                                                            |
| R17, R18                     |     2 | 1.5k Ω ±1% resistors (0603)                                                                                          |
| R22, R23                     |     2 | 75 Ω ±5% resistors (0603)                                                                                            |
| R24, R25, R37                |     3 | 10 Ω ±5% resistors (0603)                                                                                            |
| R26, R27, R57                |     3 | 0 Ω resistors (0603)                                                                                                 |
| R28, R35                     |     0 | Not installed, 1W resistors (2512)                                                                                   |
| R29-R34, R40, R41            |     0 | Not installed, resistors (0603)                                                                                      |
| R42, R43, R45, R46           |     4 | 27 Ω ±5% resistors (0603)                                                                                            |
| R44, R47, R52                |     3 | 1.5k Ω ±5% resistors (0603)                                                                                          |
| R48                          |     1 | 2.2k Ω ±5% resistor (0603)                                                                                           |

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                            |
|---------------|-------|--------------------------------------------------------------------------------------------------------|
| R49           |     1 | 10k Ω ±5% resistor (0603)                                                                              |
| R50           |     1 | 470 Ω ±5% resistor (0603)                                                                              |
| R61-R65       |     0 | Not installed, resistors-short PC trace (0603)                                                         |
| SW1-SW4       |     4 | Pushbutton switches                                                                                    |
| U1            |     1 | Dual-phase fixed-frequency controller (40-pin thin QFN, 5mm x 5mm) Maxim MAX17009GTL+                  |
| U2            |     1 | Microcontroller (68-pin QFN-EP*) Maxim MAXQ2000-RAX+                                                   |
| U3            |     1 | 93C46type3-wireEEPROM(8-pinSO), 16-bit architecture Atmel AT93C46A-10SU-2.7 Digi-Key AT93C46A-10SU-2.7 |
| U4            |     1 | UART-to-USB converter (32-pin TQFP, 7mm x 7mm) FTDI FT232BL                                            |
| U5            |     1 | LDO regulator (5-pin SC70) Maxim MAX8511EXK33+T (Top Mark: AEI)                                        |
| U6            |     1 | LDO regulator (5-pin SC70) Maxim MAX8511EXK25+T (Top Mark: ADV)                                        |
| Y1            |     1 | 16MHz crystal                                                                                          |
| Y2            |     1 | 6MHz crystal                                                                                           |
| -             |     1 | PCB: MAX17009 Evaluation Kit+                                                                          |

## Component Suppliers

| SUPPLIER                       | PHONE        | WEBSITE                  |
|--------------------------------|--------------|--------------------------|
| AVX Corp.                      | 360-699-8714 | www.avx.com              |
| Central Semiconductor          | 631-435-1110 | www.centralsemi.com      |
| Fairchild Semiconductor        | 888-522-5372 | www.fairchildsemi.com    |
| Murata Mfg. Co., Ltd.          | 770-436-1300 | www.murata.com           |
| NEC TOKIN America, Inc.        | 510-324-4110 | www.nec-tokinamerica.com |
| Nihon Inter Electronics Corp.  | 847-843-7500 | www.niec.co.jp           |
| Panasonic Corp.                | 714-373-7939 | www.panasonic.com        |
| SANYO North America Corp.      | 619-661-6835 | www.sanyodevice.com      |
| Taiyo Yuden                    | 800-348-2496 | www.t-yuden.com          |
| TDK Corp.                      | 847-803-6100 | www.component.tdk.com    |
| TOKO America, Inc.             | 408-432-8281 | www.tokoam.com           |
| Vishay/Siliconix               | 402-564-3131 | www.vishay.com           |
| Würth Electronik GmbH & Co. KG | 201-785-8800 | www.we-online.com        |

Note: Indicate that you are using the MAX17009 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17009 Evaluation Kit

## MAX17009 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX17009.EXE            | Application program                        |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

## Quick Start

## Recommended Equipment

- 7V to 24V, &gt;100W power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 1A
- Two dummy loads capable of sinking 18A each
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope
- A user-supplied Windows 2000/XP PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows  2000/XP operating system.

## Procedure

The MAX17009 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 17009xx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 4) Verify that there are shunts across pins 1-2 of JU2 (OPTION = high) and pins 2-3 of JU3 ( PRO = low).
- 5) Verify  that  there  is  a  shunt  across  pins  1-2  of  JU1 (PGD\_IN), pins 1-2 of JU4 ( SHDN ), pins 1-2 of JU5 (SVD), and pins 1-2 of JU6 (SVC), allowing U2 to control the MAX17009.
- 6) Turn on the battery power before turning on the 5V bias power.
- 7) Connect the USB cable from the PC to the EV kit board. A Building Driver Database window pops up in addition to a New Hardware Found message when installing the USB driver for the first time. If you do not see a window that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges  are  required  to  install  the  USB  device driver on Windows 2000 and XP. Refer to the TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.
- 8) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX17009 (default installation directory) using the Browse button.
- 9) Start the EV kit software by opening its icon in the Start |  Programs menu. The EV kit software main window should appear, as shown in Figure 1.
- 10) Check the Core 0 , Core 1 ,  and North Bridge checkboxes. Move any slider to adjust the voltage to 1.2V and press the Send Data button.
- 11) Observe the 1.2000V output voltage on the SMPS and NBV\_BUF outputs with the DMM and/or oscilloscope. Look at the LX switching nodes and MOSFET gate-drive signals while varying the load current.

## Detailed Description of Software

The main window of the evaluation software (Figure 1) displays Address to Send , Data to Send , Last Address Sent , and Last Data Sent status. In addition, the GUI allows the user to select Core 0 , Core 1 , and/or North Bridge outputs.

The sliders to the right of each output checkbox correspond with the output voltage setting for that core. The Send Data button must be pressed to write the new output voltage setting(s) to the MAX17009. The Last

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17009 Evaluation Kit

Figure 1. MAX17009 EV Kit Software Main Window

<!-- image -->

Address Sent and Last Data Sent status helps the user keep track of the last transmission.

## Saving Power

Unchecking the Power-Saving Off checkbox puts the MAX17009 in power-saving mode. The MAX17009 is in normal operation while the Power-Saving Off checkbox is checked. In power-saving mode, NB\_SKP is forced low, and the SMPS offset, if enabled, is removed.

## Resetting the GUI (RESET GUI)

The software main window will need to be synchronized to  the  MAX17009 EV kit hardware after the following events:

<!-- image -->

- Pressing any of the on-board switches (SW1-SW4)
- Recycling 5V power to the MAX17009 EV kit

Press the RESET GUI button after any of the above events in order to use the software main window again.

## I 2 C Low-Level Commands

Press  the Options | 2-wire low level menu item at the top of the GUI to execute low-level I 2 C interface commands. Once the new window opens, go to the 2-wire  Interface t a b  | General  Commands | SMBusSendByte(addr,cmd) to write hex data manually into the registers of the MAX17009.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17009 Evaluation Kit

## Detailed Description of Firmware

The on-board switches (SW1-SW4) allow the user to perform four different predetermined high-speed I 2 C tests. Detailed descriptions of each dynamic output test are given below.

The sequence for the dynamic output test assigned to SW1 is shown in Table 1.

## Table 1. SW1 Dynamic Output Test with High-Speed I 2 C Interface

|   STEP | ADDRESS   | DATA   | DESCRIPTION               |
|--------|-----------|--------|---------------------------|
|      1 | 0xC4      | 0xCC   | Set DAC1 to 0.6V (Core 0) |
|      2 | N/A       | N/A    | Wait 100µs                |
|      3 | 0xC8      | 0xCC   | Set DAC2 to 0.6V (Core 1) |
|      4 | N/A       | N/A    | Wait 100µs                |
|      5 | 0xC2      | 0xCC   | Set DAC3 to 0.6V (NB)     |
|      6 | N/A       | N/A    | Wait 100µs                |
|      7 | 0xC4      | 0x94   | Set DAC1 to 1.3V (Core 0) |
|      8 | N/A       | N/A    | Wait 100µs                |
|      9 | 0xC8      | 0x94   | Set DAC2 to 1.3V (Core 1) |
|     10 | N/A       | N/A    | Wait 100µs                |
|     11 | 0xC2      | 0x94   | Set DAC3 to 1.3V (NB)     |

The sequence for the dynamic output test assigned to SW2 is shown in Table 2.

Table 2. SW2 Dynamic Output Test with High-Speed I 2 C Interface

|   STEP | ADDRESS   | DATA   | DESCRIPTION                |
|--------|-----------|--------|----------------------------|
|      1 | 0xC4      | 0xFF   | Set DAC1 to 0V (Core 0)    |
|      2 | N/A       | N/A    | Wait 100µs                 |
|      3 | 0xC8      | 0xFF   | Set DAC2 to 0V (Core 1)    |
|      4 | N/A       | N/A    | Wait 100µs                 |
|      5 | 0xC2      | 0xFF   | Set DAC3 to 0V (NB)        |
|      6 | N/A       | N/A    | Wait 100µs                 |
|      7 | 0xC4      | 0x80   | Set DAC1 to 1.55V (Core 0) |
|      8 | N/A       | N/A    | Wait 100µs                 |
|      9 | 0xC8      | 0x80   | Set DAC2 to 1.55V (Core 1) |
|     10 | N/A       | N/A    | Wait 100µs                 |
|     11 | 0xC2      | 0x80   | Set DAC3 to 1.55V (NB)     |

The sequence for the dynamic output test assigned to SW3 is shown in Table 3.

Table 3. SW3 Dynamic Output Test with High-Speed I 2 C Interface

|   STEP | ADDRESS   | DATA   | DESCRIPTION                                    |
|--------|-----------|--------|------------------------------------------------|
|      1 | 0xC4      | 0xCC   | Set all DACs to 0V (Core 0, Core 1, and NB)    |
|      2 | N/A       | N/A    | Wait 1ms                                       |
|      3 | 0xC8      | 0xCC   | Set all DACs to 1.55V (CORE 0, CORE 1, and NB) |

The sequence for the dynamic output test assigned to SW4 is shown in Table 4.

## Table 4. SW4 Dynamic Output Test with High-Speed I 2 C Interface

|   STEP | ADDRESS   | DATA   | DESCRIPTION                                   |
|--------|-----------|--------|-----------------------------------------------|
|      1 | N/A       | N/A    | Set SHDN and PGD_IN to logic-low              |
|      2 | N/A       | N/A    | Wait 10ms                                     |
|      3 | N/A       | N/A    | Set SCL to logic-high and SDA to logic-low    |
|      4 | N/A       | N/A    | Set SHDN to logic-high                        |
|      5 | N/A       | N/A    | Wait 2ms                                      |
|      6 | N/A       | N/A    | Set PGD_IN to logic-high                      |
|      7 | N/A       | N/A    | Wait 10µs                                     |
|      8 | 0xCE      | 0x9C   | Set all DACs to 1.2V (Core 0, Core 1, and NB) |

## Detailed Description of Hardware

This 36A dual-phase buck-regulator design is optimized for a 300kHz switching frequency (per phase) and  output  voltage  settings  around  1.200V.  At VOUT = 1.200V and VIN = 12V, the inductor ripple is approximately 30% (LIR = 0.3). The MAX17009 controller interleaves both phases, resulting in out-of-phase operation that minimizes the input and output filtering requirements. The dual-phase controller shares the current between two phases that operate 180° out-ofphase, supplying up to 18A per phase.

Table 5 lists the boot-voltage codes.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17009 Evaluation Kit

## Setting the Output Voltage

## Table 5. Boot-Voltage Codes

## 7-Bit DAC

Inside the MAX17009 are three 7-bit digital-to-analog converters (DACs). Each DAC can be individually programmed to different voltage levels through the serialinterface bus. The DAC sets the target for the output voltage for the SMPSs and the NB buffer output (NBV\_BUF). The available DAC codes, and resulting output voltages, are compatible with the AMD SVI specifications (Table 6).

## 2-Wire Serial Interface (SVC, SVD)

The MAX17009 supports the 2-wire, write-only serialinterface bus, as defined by the AMD serial VID interface specification. The serial interface is similar to the high-speed 3.4MHz I 2 C bus, but without the mastermode sequence. The bus consists of a clock line (SVC) and a data line (SVD). The CPU is the bus master, and the MAX17009 is the slave.

The MAX17009 serial interface works from 100kHz to 3.4MHz. In the AMD mobile application, the bus runs at 3.4MHz. In the MAX17009 EV kit, the serial interface operates at 400kHz when commands are sent through the EV kit software. When using the preprogrammed SW switches, the serial interface operates at 1.7MHz.

The serial interface is active only after PGD\_IN goes high in the startup sequence. The CPU sets the VID voltage of the three internal DACs and the PSI\_L bit through the serial interface.

During the startup sequence, the SVC and SVD inputs serve an alternate function to set the 2-bit boot VID for all  three  DACs  while  PWRGD is low. In debug mode, the SVC and SVD inputs function in the 2-bit VID mode when PGD\_IN is low, and in the serial-interface mode when PGD\_IN is high.

By default, the MAX17009 serial interface is controlled by U2 through the jumper settings on JU5 (pins 1-2) and JU6 (pins 1-2). To directly control the MAX17009 with an external I 2 C serial interface, connect the external controller to the SDA and SCL pads, and move the shunts on JU5 and JU6 across pins 2-3.

## Boot Voltage

On startup, the MAX17009 slews the target for all three DACs from ground to the boot voltage set by the SVC and SVD pin voltage levels. While the output is still below regulation, the SVC and SVD levels may be changed and the MAX17009 will set the DACs to the new boot voltage. Once the programmed boot voltage is  reached, and PWRGD goes high, the MAX17009 stores the boot VID. Changes in the SVC and SVD settings will not change the output voltage once the boot VID is stored. When PGD\_IN goes high, the MAX17009 exits boot mode, and the three DACs can be independently set to any voltage in the VID table through the serial interface.

<!-- image -->

|   SVC |   SVD |   BOOT VOLTAGE (V BOOT ) ( PRO = VDD OR GND) |   BOOT VOLTAGE (V BOOT ) ( PRO = OPEN) |
|-------|-------|----------------------------------------------|----------------------------------------|
|     0 |     0 |                                          1.1 |                                    1.4 |
|     0 |     1 |                                          1.0 |                                    1.2 |
|     1 |     0 |                                          0.9 |                                    1.0 |
|     1 |     1 |                                          0.8 |                                    0.8 |

If PGD\_IN goes from high to low any time after the boot VID is stored, the MAX17009 sets all three DACs back to the voltage of the stored boot VID.

When in debug mode ( PRO = open), the MAX17009 uses a different boot-voltage code set. Keeping PGD\_IN low allows the SVC and SVD inputs to set the three DACs to different voltages in the boot-voltage code table. When PGD\_IN is subsequently set high, the three DACs can be independently set to any voltage in the VID table through the serial interface.

## Reduced Power-Dissipation Voltage Positioning

The MAX17009 EV kit uses voltage positioning to decrease the size of the output capacitor and to reduce power dissipation at heavy loads. The MAX17009 includes two transconductance amplifiers for adding gain to the voltage-positioning sense path for each output. The amplifier's input is generated by summing the currentsense inputs, which differentially sense the voltage across the current-sense resistors (R1 = R2 = 1m Ω ). The transconductance amplifier's output connects to the voltage-positioned feedback input (FBDC1), so the resistance  between  FBDC1  and  VCORE0  (R19) determines the voltage-positioning gain. Similarly, the other transconductance amplifier's output connects to the voltage-positioned feedback input (FBDC2), so the resistance  between  FBDC2  and  VCORE1  (R12) determines the voltage-positioning gain. Resistors R12 and R19 provide a -1.3mV/A voltage-positioning slope at the outputs. Remote output and ground sensing eliminate any additional PCB voltage drops.

## Load-Transient Experiment

One interesting experiment is to subject the output to large, fast-load transients and observe the output with an oscilloscope. Accurate measurement of output ripple and load-transient response invariably requires that

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX17009

## MAX17009 Evaluation Kit

## Table 6. Output Voltage VID DAC Codes

|   SVID[6:0] |   OUTPUT VOLTAGE (V) |   SVID[6:0] |   OUTPUT VOLTAGE (V) |   SVID[6:0] | OUTPUT VOLTAGE (V)   | SVID[6:0]         |   OUTPUT VOLTAGE (V) |
|-------------|----------------------|-------------|----------------------|-------------|----------------------|-------------------|----------------------|
|    000_0000 |               1.5500 |    010_0000 |               1.1500 |             | 100_0000 0.7500      | 110_0000          |               0.3500 |
|    000_0001 |               1.5375 |    010_0001 |               1.1375 |    100_0001 | 0.7375               | 110_0001          |               0.3375 |
|    000_0010 |               1.5250 |    010_0010 |               1.1250 |    100_0010 | 0.7250               | 110_0010          |               0.3250 |
|    000_0011 |               1.5125 |    010_0011 |               1.1125 |             | 100_0011 0.7125      | 110_0011          |               0.3125 |
|    000_0100 |               1.5000 |    010_0100 |               1.1000 |    100_0100 | 0.7000               | 110_0100          |               0.3000 |
|    000_0101 |               1.4875 |    010_0101 |               1.0875 |    100_0101 | 0.6875               | 110_0101          |               0.2875 |
|    000_0110 |               1.4750 |    010_0110 |               1.0750 |    100_0110 | 0.6750               | 110_0110          |               0.2750 |
|    000_0111 |               1.4625 |    010_0111 |               1.0625 |    100_0111 | 0.6625               | 110_0111          |               0.2625 |
|    000_1000 |               1.4500 |    010_1000 |               1.0500 |             | 100_1000 0.6500      | 110_1000          |               0.2500 |
|    000_1001 |               1.4375 |    010_1001 |               1.0375 |    100_1001 | 0.6375               | 110_1001          |               0.2375 |
|    000_1010 |               1.4250 |    010_1010 |               1.0250 |    100_1010 | 0.6250               | 110_1010          |               0.2250 |
|    000_1011 |               1.4125 |    010_1011 |               1.0125 |             | 100_1011 0.6125      | 110_1011          |               0.2125 |
|    000_1100 |               1.4000 |    010_1100 |               1.0000 |             | 100_1100 0.6000      | 110_1100          |               0.2000 |
|    000_1101 |               1.3875 |    010_1101 |               0.9875 |    100_1101 | 0.5875               | 110_1101          |               0.1875 |
|    000_1110 |               1.3750 |    010_1110 |               0.9750 |    100_1110 | 0.5750               | 110_1110          |               0.1750 |
|    000_1111 |               1.3625 |    010_1111 |               0.9625 |             | 100_1111 0.5625      | 110_1111          |               0.1625 |
|    001_0000 |               1.3500 |    011_0000 |               0.9500 |    101_0000 | 0.5500               | 111_0000          |               0.1500 |
|    001_0001 |               1.3375 |    011_0001 |               0.9375 |             | 101_0001 0.5375      | 111_0001          |               0.1375 |
|    001_0010 |               1.3250 |    011_0010 |               0.9250 |             | 101_0010 0.5250      | 111_0010          |               0.1250 |
|    001_0011 |               1.3125 |    011_0011 |               0.9125 |             | 101_0011 0.5125      | 111_0011          |               0.1125 |
|    001_0100 |               1.3000 |    011_0100 |               0.9000 |    101_0100 | 0.5000               | 111_0100          |               0.1000 |
|    001_0101 |               1.2875 |    011_0101 |               0.8875 |             | 101_0101 0.4875      | 111_0101          |               0.0875 |
|    001_0110 |               1.2750 |    011_0110 |               0.8750 |    101_0110 | 0.4750               | 111_0110          |               0.0750 |
|    001_0111 |               1.2625 |    011_0111 |               0.8625 |    101_0111 | 0.4625               | 111_0111          |               0.0625 |
|    001_1000 |               1.2500 |    011_1000 |               0.8500 |    101_1000 | 0.4500               | 111_1000          |               0.0500 |
|    001_1001 |               1.2375 |    011_1001 |               0.8375 |    101_1001 | 0.4375               | 111_1001          |               0.0375 |
|    001_1010 |               1.2250 |    011_1010 |               0.8250 |    101_1010 | 0.4250               | 111_1010          |               0.0250 |
|    001_1011 |               1.2125 |    011_1011 |               0.8125 |    101_1011 | 0.4125               | 111_1011          |               0.0125 |
|    001_1100 |               1.2000 |    011_1100 |               0.8000 |    101_1100 | 0.4000               | 111_1100          |                    0 |
|    001_1101 |               1.1875 |    011_1101 |               0.7875 |             | 101_1101 0.3875      | 111_1101          |                    0 |
|    001_1110 |               1.1750 |    011_1110 |               0.7750 |    101_1110 | 0.3750 0.3625        | 111_1110 111_1111 |                    0 |
|    001_1111 |               1.1625 |    011_1111 |               0.7625 |    101_1111 |                      |                   |                    0 |

ground clip leads be completely avoided and that the probe must be removed to expose the GND shield, so the probe can be directly grounded with as short a wire as possible to the board. Otherwise, EMI and noise pickup corrupt the waveforms.

Most benchtop electronic loads intended for powersupply testing lack the ability to subject the DC-DC

converter to ultra-fast-load transients. Emulating the supply current (di/dt) at the CPU VCORE pins requires at  least  500A/µs load transients. One easy method for generating such an abusive load transient is to install a power MOSFET at the N7 location and install resistor R35 between 5m Ω and 10m Ω to  monitor  the  transient current.  Then drive its gate (TP5) with a strong pulse generator at a low duty cycle (&lt; 5%) to minimize heat

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17009 Evaluation Kit

stress in  the  MOSFET. Vary the high-level output voltage of the pulse generator to vary the load current.

## Table 7. Jumper JU4 Function (SHDN)

To determine the load current, you might expect to insert a meter in the load path, but this method is prohibited here by the need for low resistance and inductance in the path of the dummy-load MOSFET. To determine how much load current a particular pulse-generator amplitude is causing, observe the current through inductor L1 by looking across R1 with a differential probe. In the buck topology, the load current is approximately equal to the average value of the inductor current.

## NBV\_BUF Operation

## Controlling the North Bridge (NB) Regulator

The reference buffer (NBV\_BUF) sets the output voltage of any regulator with an analog reference input (REFIN) function. This regulator can be an LDO (e.g., MAX1510 or MAX8794), a single-switching regulator (e.g., MAX8792),  or  a  dual-switching  regulator  (e.g., MAX8775).

Connect the NBV\_BUF output to the REFIN pin of the NB regulator and the GNDS\_NB input to the NB regulator  ground. Connect the required supply voltages and control signals to the selected NB regulator. The MAX17009 SHDN input may be connected to the enable input of the NB regulator so that both regulators start up and shut down at the same time.

Use the SW1-SW4 switches or the EV kit software to control the output of the NB regulator. Monitor the NB regulator output voltage with a DMM to measure the final  voltage,  or  with  an  oscilloscope  to  observe  the transitions.

## Reference Buffer Output (NBV\_BUF)

When the MAX17009 EV kit is not connected to an NB regulator, the GNDS\_NB input must be grounded back to  the  MAX17009 EV kit ground using jumper wires. Leaving the GNDS\_NB floating can result in false readings of the NBV\_BUF voltage.

Use the SW1-SW4 switches or the EV kit software to control the output of the NBV\_BUF. Monitor the NBV\_BUF output voltage with a DMM to measure the final  voltage,  or  with  an  oscilloscope  to  observe  the transitions.

## Jumper Settings

## Shutdown ( SHDN )

When SHDN goes low (JU4 = GND), the MAX17009 enters the low-power shutdown mode. PWRGD is pulled low immediately and the SMPS output voltages ramp down at 1mV/µs. See Table 7.

<!-- image -->

| SHUNT POSITION   | SHDN PIN                                    | MAX17009 OUTPUT                                                                                   |
|------------------|---------------------------------------------|---------------------------------------------------------------------------------------------------|
| 1-2              | Connected to U2 pin 58                      | -                                                                                                 |
| 2-3              | Connected to GND                            | Shutdown mode, SMPS output voltages disabled. VCORE0 = 0V VCORE1 = 0V                             |
| Not installed    | Connected to VDD through 100k Ω resistor R9 | SMPS output voltages enabled. VCORE0, VCORE1, and NBV_BUF voltages are set by SVC and SVD inputs. |

The MAX17009 shuts down completely-the drivers are disabled, the reference turns off, and the supply currents drop to about 1µA (max)-20µs after the controller  reaches  the  0V  target.  When  a  fault  condition (overvoltage or undervoltage) occurs on one SMPS, the other SMPS and the NBV\_BUF immediately go through the soft-shutdown sequence. To clear the fault latch and reactivate the controller, toggle SHDN or cycle VCC power.

Soft-shutdown for the NB regulator is determined by the particular NB regulator's shutdown behavior. In the typical application, the NB regulator's SHDN pin or enable pin is  toggled at the same time as the MAX17009's SHDN pin.

## System Power-Good Input (PGD\_IN)

After the SMPS outputs reach the boot voltage, the MAX17009 switches over to the serial-interface mode when PGD\_IN goes high. Any time during normal operation,  a  high-to-low  transition  on  PGD\_IN  causes the MAX17009 to slew all three internal DACs back to the stored boot VIDs. PWRGD goes low for a minimum of 20µs when PGD\_IN goes low, and stays low until 20µs after both SMPS internal DACs reach the boot VID. The SVC and SVD inputs are disabled during this time that PGD\_IN is low. The serial interface is reenabled when PGD\_IN goes high again. See Table 8.

## Offset and Transient-Phase Repeat (OPTION)

The 12.5mV offset and the transient-phase repeat features of the MAX17009 can be selectively enabled and disabled by the OPTION pin setting. Table 9 shows the OPTION pin voltage levels and the features that are enabled. Refer to the Offset and the Transient-Phase Repeat sections in the MAX17009 data sheet for a detailed description of the respective features.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17009 Evaluation Kit

## Table 8. Jumper JU1 Function (PGD\_IN)

| SHUNT POSITION   | PGD_IN PIN                                    | MAX17009 OUTPUT                                                                                                                                 |
|------------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2              | Connected to U2 pin 59                        | -                                                                                                                                               |
| 2-3              | Connected to GND                              | The SVC and SVD inputs are disabled during the time PGD_IN is low.                                                                              |
| Not installed    | Connected to 2.5V through 100k Ω resistor R39 | The serial interface is re- enabled when PGD_IN goes high again. The MAX17009 switches over to the serial-interface mode when PGD_IN goes high. |

## Selectable Overvoltage Protection and Debug Mode ( PRO )

The MAX17009 features a tri-level PRO pin that enables the overvoltage protection (OVP) feature, or puts the MAX17009 in debug mode. Table 10 shows the PRO

## Table 9. Jumper JU2 Function (OPTION)

| SHUNT POSITION   | OPTION PIN       |   OFFSET ENABLED |   TRANSIENT- PHASE REPEAT ENABLED |
|------------------|------------------|------------------|-----------------------------------|
| 1-2              | Connected to VDD |                0 |                                 0 |
| Not installed    | Open             |                0 |                                 1 |
| 1-3              | Connected to REF |                1 |                                 0 |
| 1-4              | Connected to GND |                1 |                                 1 |

selectable options. Debug mode is intended for applications where the serial interface is not properly functioning and the output voltage needs to be adjusted to different levels. The DAC voltage settings in debug mode further depend on the PGD\_IN level to switch between the 2-bit VID setting or serial-interface operation.

## Table 10. Jumper JU3 Function (PRO)

| SHUNT POSITION   | PRO PIN          | MAX17009 OUTPUT          |
|------------------|------------------|--------------------------|
| 1-2              | Connected to VDD | OVP disabled             |
| 2-3              | Connected to GND | OVP enabled              |
| Not installed    | Open             | Debug mode, OVP disabled |

## Combined-Mode Operation

To configure the MAX17009 for combined-mode operation, remove R13 and connect the GNDS2 input to the 2.5V, 3.3V, or 5V supply using a wire. Connect a copper strap (e.g., solder wick) between the output capacitors of each phase.

The SW1-SW4 switches and the EV kit software still control  the  combined SMPS and NBV\_BUF outputs in combined  mode,  but  in  combined  mode,  the MAX17009 SMPS only responds to core 0 commands. Core 1 commands are ignored.

In combined mode, unchecking the Power-Saving Off checkbox in the software sets the MAX17009 SMPS into single-phase operation, removes the offset, if enabled, and sets NB\_SKP low. Checking the Power-Saving Off checkbox in the software sets the MAX17009 SMPS into dual-phase operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17009 Evaluation Kit

Figure 2a. MAX17009 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17009 Evaluation Kit

Figure 2b. MAX17009 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17009 Evaluation Kit

<!-- image -->

Figure 3. MAX17009 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17009 Evaluation Kit

Figure 4. MAX17009 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17009 Evaluation Kit

<!-- image -->

Figure 5. MAX17009 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17009 Evaluation Kit

Figure 6. MAX17009 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17009 Evaluation Kit

<!-- image -->

Figure 7. MAX17009 EV Kit PCB Layout-Internal Layer 4

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17009 Evaluation Kit

Figure 8. MAX17009 EV Kit PCB Layout -Internal Layer 5

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17009 Evaluation Kit

Figure 9. MAX17009 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17009 Evaluation Kit

Figure 10. MAX17009 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

20

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_