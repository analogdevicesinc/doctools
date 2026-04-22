<!-- lastmod 2024-03-21 -->
<!-- image -->

## General Description

The  MAX22516  evaluation  kit  (EV  kit)  consists  of  the evaluation  board  and  software.  The  EV  kit  is  a  fully assembled  and  tested  circuit  board  that  evaluates  the MAX22516 IO-Link ®  data link controller with transceiver and integrated DC-DC buck regulator. The EV kit includes Windows ® -compatible software that provides a graphical user  interface  (GUI)  for  exercising  the  features  of  the MAX22516. The EV kit is connected to a PC through a USB-A-to-micro-B cable.

Windows based GUI software is available for use with the EV  kit  and  can  be  downloaded  from  Analog  Devices' website at www.analog.com/products/en/MAX22516 . Windows  7  or  newer  Windows  operating  system  is required to use the EV kit software.

## EV Kit Photo

Evaluates: MAX22516

## Features and Benefits

- IO-Link Compliant Device Transceiver
- I/O and SPI Interface Terminals
- Windows 10 Compatible Software
- USB-PC Connection

Ordering Information appears at end of data sheet.

<!-- image -->

IO-Link is a registered trademark of PROFIBUS User Organization (PNO).

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX22516 Evaluation Kit

## MAX22516 EV Kit Files

| FILE                         | DESCRIPTION                          |
|------------------------------|--------------------------------------|
| MAX22516EVKITSetupVx.x x.exe | Installs EV kit files onto computer. |

## Quick Start

## Required Equipment

- MAX22516 EV Kit (USB-A-to-micro-B cable)
- User-supplied Windows 10 PC with a spare USB port
- 24V, 1A DC power supply
- 100kHz function generator
- Multimeter/voltmeter
- 2-channel oscilloscope

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

1.  Install the EV kit software on the computer by running the MAX22516EVKITSetupVx.x.x.exe program inside the temporary folder. This copies the program files and creates  an  icon  in  the  Windows Start menu.  The software requires the .NET Framework 4.5 or later. If connected  to the internet,  Windows  automatically updates the .NET Framework as needed.
2.  The EV kit software launches automatically after install, and  it  can  be  launched  by  clicking  its  icon  in  the Windows Start menu.

## Table 1.  Jumper Connection Guide

| JUMPER   | DEFAULT CONNECTION   | FEATURE                                                                                                                                                                                               |
|----------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2                  | LIN supply selection. 1-2: LIN is connected to the output of DC-DC. 1-3: LIN is connected to PV 24 . 1-4: LIN is connected to V 5 . Apply an external 5V supply to V 5 when using this configuration. |
| J2       | Open                 | RESET /POK setting. Open: RESET /POK is pulled up to V L . Closed: RESET /POK is connected to ground.                                                                                                 |
| J3       | 2-3                  | MCLKDIR setting. 1-2: MCLKDIR is high. MCLK is an output. 2-3: MCLKDIR is low. MCLK is an input.                                                                                                      |
| J4       | 2-3                  | CRCEN setting. 1-2: CRCEN is high. CRC on the SPI interface is enabled. 2-3: CRCEN is low. CRC on the SPI interface is disabled.                                                                      |
| J6       | 2-3                  | V L supply selection. 1-2: V L = V 5 2-3: V L = V 33                                                                                                                                                  |
| J10      | 1-2                  | TXEN setting. 1-2: TXEN is high. 2-3: TXEN is low.                                                                                                                                                    |

## Evaluates: MAX22516

3. Ensure  that  all  jumpers  are  in  their  default  position ( Table 1 ).
4.  Connect the 24V supply to the V24 test point (TP1) or using the V24 plug (TP6). Connect the ground terminal of the supply to the GND test point (TP10) or using the GND plug (TP7).
5.  Connect the USB cable to the MAX22516 EV kit.
6.  Turn on the 24V supply.
7.  Connect the multimeter/voltmeter to the VL test point (TP3) and verify that it reads 3.3V.
8.  Launch  the  MAX22516  EV  kit.  When  the  board  is recognized,  the  EV  kit  GUI  shows  that  the  board  is connected in the lower right-hand corner of the GUI.
9.  Connect  the  function  generator  to  the  TX  test  point (TP14).
10.  Connect the oscilloscope channels to the TX test point (TP14) and the C/Q test point (TP19).
11.  In  the  Register  Settings  tab,  scroll  down  to  the CQ\_CTRL1  register  and  enable  the  C/Q  driver  by setting CQ\_EN (B[0]) to 1.
12.  Configure the C/Q driver in push-pull mode by setting the CQ\_PP (B[2]) to 1.
13.  Click Write Modified button to write these values to the MAX22516.
14.  Turn  on  the  function  generator  and  verify  that  C/Q switches as expected.

## Detailed Description of Hardware

## Power

## USB to PC Connection

The MAX22516 EV kit includes an FTDI 2232 USB converter to communicate with a PC. The 3.3V supply required to power the FTDI IC is supplied by the USB connection. LED DS1 turns on when the FTDI is powered and configured.

## IO-Link Power (V24)

Power for the MAX22516 is supplied by connecting a power supply to the V24 test points (TP1 or TP6), or by connecting an IO-Link master to the MAX22516 EV kit board and supplying power through the L+ (V24) line. When using an IO-Link master to power the board, ensure that no external supplies are connected to the V24 test points.

## Regulators and Logic (V5, V33, VL)

The LIN regulator input pin can be connected to PV 24 , the output of the on-board DC-DC, or to the V5 pin using the J1 jumper. The DC-DC is configured to output a voltage of 5.9V. Connect J1 to the 1-2 position to connect LIN to the output of the DC-DC.

To disable the integrated V5 regulator, connect LIN to V5 (J1 is 1-4), and connect an external 5V supply to the V5 test point (TP4). 5V on V5 is required for normal operation.

The VL logic supply can be selected using the J6 jumper. Connect J6 to the 1-2 position to set VL = V5. Connect J6 to 23 to set VL = V33. If required, remove the shunt on J6 and connect an external supply from 2.5V to 5.5V to the VL test point (TP3). VL is required for normal operation.

## IO-Link Connection

The MAX22516 EV kit includes a standard 4-pin M12 connector used in IO-Link communication. Connect a cable between an IO-Link master and the MAX22516 EV kit to use MAX22516 to communicate with the IO-Link master. The EV kit GUI includes an IO-Link Communication tab to simplify this. For more information, see the IO-Link Tab section. The MAX22516 is tested on the EV kit to survive surge pulses up to ±1.2kV/500 Ω on the C/Q and DO pins. Note that the 1k Ω series impedance (R42) on the DI input, however, is not rated for high voltage/current events and does not survive surge testing. Replace the R42 with a 1k Ω pulse resistor for surge testing, if needed.

Evaluates: MAX22516

## MAX22516 Evaluation Kit

## Detailed Description of Software

The MAX22516 is designed to allow quick and easy evaluation of the device. The MAX22516 EV kit GUI contains two tabs: Register  Settings tab  that  allows  individual  register  and  bit  access,  and  an IO-Link tab  for  fast  IO-Link communication setup. For more information, see Figure 1 .

Figure 1. MAX22516 EV Kit GUI, Register Settings Tab

<!-- image -->

The bottom of the MAX22516 EV kit GUI contains the version and connection status of the EV kit GUI and EV kit, itself. Ensure that the EV kit is connected to the PC to begin evaluation.

## Register Settings Tab

The Register Settings tab opens by default and includes two tables: Register Table ,  (on  the  left),  and Register Bit Description table (on the right), SPI read and write buttons, interrupt indicators, and clear command buttons.

## Register Tables

The Register Table includes a complete list of available registers as outlined in the MAX22516 data sheet. Select a register by clicking at any point in the register row. When a register is selected in the in the Register Table , the Register Bit Description table populates with information for each bit in that register.

## SPI Communication (Read All, Write Modified, and CRC)

To set a bit, in the Register Bit Description table, click the drop-down box in the Setting column and select the required bit value. Note that bits that are unused or not available do not have drop-down boxes. Alternatively, click the Value column of a given register to type on the register value directly, in binary format, starting with 0b.

Any register that is edited and/or changed is highlighted with red text in the main table until the updated values are written to the MAX22516. Click the Write Modified button to write the new register values to the MAX22516. Note that only registers highlighted in red text are written when the Write Modified button is clicked and all register text returns to black when the write is complete.

Click the Read All button to read all of the registers in the MAX22516.

The MAX22516 is capable of SPI communication with CRC protection. CRC functionality is enabled by setting the CRCEn bit in the IOLCfg register to 1 or by driving the CRCEN pin high (J4 is 1-2). Select the SPI CRC Enabled check box.

Evaluates: MAX22516

## MAX22516 Evaluation Kit

## Interrupt/Error Status ( IRQ and CRCERR )

The Interrupt/Error Status box reports the logic level of the IRQ and CRCERR pins on the MAX22516.

IRQ asserts when an enabled interrupt occurs and the associated indicator box in the Interrupt/Error Status box turns yellow. Enable interrupts by setting the bits in the IOLIntEn, DEVIntEn, and/or ISDUIntEn registers. Click the Clear Int Register button to clear the IOLInt, DEVInt, and ISDUInt registers and deassert IRQ , if asserted. Alternatively, write 0xFF to each register to clear it.

CRCERR asserts when the MAX22516 detects a CRC error in the SPI communication. The associated indicator box in the Interrupt/Error Status box turns yellow to indicate that an error has occurred. CRCERR does not deassert until a valid write sequence is completed. Ensure that the SPI CRC Enabled check box is selected and CRCEn = 1 or CRCEN is high, if using CRC for the SPI interface.

## Clearing the IO-Link Error Counter, UART Framer Error, and Interrupt Registers

The  IOLErrCnt  and  FRMErrCnt  registers  increase  with  each  IO-Link  and/or  UART  framer  error  received  by  the MAX22516. Click the Clear IOLErrCnt button to reset the IOLErrCnt register to 0, when needed. Similarly, click the Clear FRMErrCnt button to clear the FRMErrCnt register.

Bits in the IOLInt, DEVInt, and ISDUInt registers are not automatically cleared after an interrupt-triggering event occurs. Click the Clear Int Registers button to clear the IOLInt, DEVInt, and ISDUInt registers after an interrupt bit in any of these registers has been set.

## IO-Link Tab

The MAX22516 is capable of establishing a connection and basic communication with an IO-Link master with minimal programming. While programming individual registers is available in the Register Settings tab, the IO-Link tab provides an easy-to-use interface including all of the settings and data needed to evaluate basic IO-Link communication with the MAX22516.

Configure the MAX22516 for IO-Link configuration in the following sequence (as shown in the group boxes in the GUI, Figure 2 ):

1.  Set the required IO-Link communication rate.
2.  Configure the C/Q driver.
3.  Set the Direct Page 1 parameters.
4.  Input the PDIn process data to be written to the IO-Link master.
5. Click  the Start  IO-Link  Communication button  to  write  all  the  settings  to  the  associated  registers  and  set  the ConfDone bit.

Once the Start IO-Link Communication button is clicked, the MAX22516 is ready to respond to an incoming wake-up pulse from a connected IO-Link master and begins IO-Link communication once a valid wake-up signal is received.

Evaluates: MAX22516

Figure 2. IO-Link Tab in the MAX22516 EV Kit GUI

<!-- image -->

## IO-Link Comm Data Rate

Select the required IO-Link data rate (COM1, COM2, or COM3) here. COM3 is selected by default.

## C/Q Setup

Configure the C/Q for IO-Link configuration. Push-pull (PP) mode with a 200mA is selected as default.

## Direct Page 1 Parameters

Direct Page 1 parameters are required to establish communication with an IO-Link master. Details for each of these parameters can be found in the IO-Link standard. Click the Write Direct Page 1 Parameters button to write the data rate, C/Q configuration, and Direct Page 1 parameters to the MAX22516.

## Process Data

Process data configuration settings are programmed in the Direct Page 1 Parameters section. Write or generate the required  process  data  to  send  by  entering  data  in  the PDIn Data text  box  or  by  selecting  the Generate PDIn Data Randomly check box. Click the Write PDIn Data button to write the data to the PDIn buffer.

Note that the PDIn buffer is not updated continuously with new data, and the MAX22516 sends the data in the PDIn buffer. Write new data in the PDIn Data text box and click the Write PDIn Data button to write new data to the buffer after communication has been established, if required. Similarly, select the Generate PDIn Data Randomly check box and click  the Write PDIn Data button  to  write  new  data  to  the  PDIn  buffer  after  communication  has  been  established,  if required.

## Start IO-Link Communication

The MAX22516 stops all communication through the C/Q line when the ConfDone bit in the IOLCfg register is 0. Click the Start IO-Link Communication button, after setting all other registers using the Write Direct Page 1 Parameters and Write  PDIn  Data buttons,  or  by  individually  setting  the  register  values  in  the Register  Settings tab,  to  enable  the MAX22516 for IO-Link communication. Initiate communication from the IO-Link master after the ConfDone bit is set.

## I/O Pins Tab

Two switches, SW1 and SW2, on the MAX22516 EV kit allow direct access to the UART control pins (TXEN, TX, RX, LO), and to the GPIO1 and GPIO2 pins. Ensure that the individual switches on SW1 and SW2 are ON and toggle the Enable Pin Control button in the upper left corner of the I/O Pins tab to enable control of these pins using the GUI ( Figure 3 ).

Figure 3. I/O Pin Tab in the MAX22516 EV Kit GUI

<!-- image -->

## UART and GPIO Pin Control (TXEN, TX, RX, LO, GPIO1, GPIO2)

Click the toggle button for each UART control pin or GPIO to set the associated pin high or low. The associated box in the Read column for each pin indicates whether the pin is a set high (1) or low (0). If GUI pin control is enabled and the voltage on a pin does not match the setting on the I/O Pins tab, a warning box indicates that the pin voltage does not match the requested setting. Ensure that external signals are not connected to the UART controller pins and/or GPIO pins when pin control is enabled in the GUI.

## Interrupts and Indicators

Other switches in SW2 also allow the GUI to indicate the status of the IRQ , WU /HEART, CRCERR , and RESET /POK pins when the Read All button is clicked. Text boxes also appear indicating when IRQ is low (Interrupt Received) or a valid-wake up has been detected (Wake-Up Received).

| PART           | TYPE   |
|----------------|--------|
| MAX22516EVKIT# | EV Kit |

#Denotes RoHS-compliant.

<!-- image -->

## MAX22516 Evaluation Kit

## MAX22516 EV Kit Bill of Materials

| REF DES                                       | DNI/DNP   |   QTY | VALUE               | DESCRIPTION                                                                              |
|-----------------------------------------------|-----------|-------|---------------------|------------------------------------------------------------------------------------------|
| C1                                            | -         |     1 | 0.01UF              | CAP; SMT (0603); 0.01UF; 5%; 100V; C0G; CERAMIC                                          |
| C2, C9                                        | -         |     2 | 1UF                 | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                             |
| C3, C5, C8                                    | -         |     3 | 1UF                 | CAP; SMT (0402); 1UF; 10%; 6.3V; X7R; CERAMIC                                            |
| C4                                            | -         |     1 | 6.8UF               | CAP; SMT (1206); 6.8UF; 10%; 50V; X5R; CERAMIC                                           |
| C6, C7                                        | -         |     2 | 18PF                | CAP; SMT (0402); 18PF; 5%; 50V; C0G; CERAMIC                                             |
| C10, C11                                      | -         |     2 | 330PF               | CAP; SMT (0402); 330PF; 10%; 50V; X7R; CERAMIC                                           |
| C12, C20, C21, C25, C27-C31                   | -         |     9 | 0.1UF               | CAP; SMT (0402); 0.1UF; 5%; 10V; X7R; CERAMIC                                            |
| C13, C24, C26                                 | -         |     3 | 4.7UF               | CAP; SMT (0402); 4.7UF; 20%; 10V; X5R; CERAMIC                                           |
| C14                                           | -         |     1 | 1UF                 | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                             |
| C15                                           | -         |     1 | 33UF                | CAP; SMT (2220); 33UF; 20%; 25V; X7R; CERAMIC                                            |
| C16                                           | -         |     1 | 3300PF              | CAP; SMT (0402); 3300PF; 10%; 50V; X7R; CERAMIC                                          |
| C17                                           | -         |     1 | 1UF                 | CAP; SMT (0603); 1UF; 20%; 16V; X7R; CERAMIC                                             |
| C18                                           | -         |     1 | 10UF                | CAP; SMT (0805); 10UF; 10%; 10V; X5R; CERAMIC                                            |
| C19                                           | -         |     1 | 0.01UF              | CAP; SMT (0201); 0.01UF; 10%; 10V; X7R; CERAMIC                                          |
| D4                                            | -         |     1 | SML- LX0404SIUPGUSB | DIODE; LED; SML; FULL COLOR; WATER CLEAR LENS; RED- GREEN-BLUE; SMT; VF=2.95V; IF=0.1A   |
| DS1                                           | -         |     1 | LGL29K-G2J1-24-Z    | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                     |
| J1                                            | -         |     1 | TSW-104-07-L-S      | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS        |
| J2                                            | -         |     1 | PCC02SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC |
| J3, J4, J6, J10                               | -         |     4 | TSW-103-07-T-S      | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                         |
| J9                                            | -         |     1 | ZX62D-AB-5P8(30)    | CONNECTOR; FEMALE; SMT; USB MICRO CONNECTOR; RIGHT ANGLE; 5PINS                          |
| L1                                            | -         |     1 | 27UH                | INDUCTOR; SMT; SHIELDED; 27UH; 20%; 0.8A                                                 |
| L2                                            | -         |     1 | 33UH                | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 33UH; TOL=+/- 20%; 1.3A                            |
| L3                                            | -         |     1 | 600                 | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                |
| MISC1                                         | -         |     1 | 68784-0001          | CONNECTOR; MALE; USB; USB A PLUG TO MICRO B PLUG CABLE ASSY; STRAIGHT; 4PINS-5PINS       |
| R1                                            | -         |     1 | 453K                | RES; SMT (0603); 453K; 1%; +/-100PPM/DEGC; 0.1000W                                       |
| R2                                            | -         |     1 | 3.09K               | RES; SMT (0402); 3.09K; 1%; +/-100PPM/DEGC; 0.0630W                                      |
| R3                                            | -         |     1 | 49.9K               | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W                                      |
| R4, R7, R9, R10, R18, R21, R29, R35, R36, R41 | -         |    10 | 10K                 | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                        |
| R5                                            | -         |     1 | 412K                | RES; SMT (0603); 412K; 1%; +/-100PPM/DEGC; 0.1000W                                       |
| R6                                            | -         |     1 | 73.2K               | RES; SMT (0603); 73.2K; 1%; +/-100PPM/DEGC; 0.1000W                                      |
| R11                                           | -         |     1 | 2.2K                | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                       |
| R12                                           | -         |     1 | 12K                 | RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC; 0.0630W                                        |
| R13, R15                                      | -         |     2 | 1K                  | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                         |
| R14, R22- R28, R30, R31, R34,                 | -         |    15 |                     | RES; SMT (0402); 220; 1%; +/-100PPM/DEGC; 0.1000W                                        |
| R37-R40 R19, R20                              | -         |     2 | 220 0               | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                              |

Evaluates: MAX22516

## MAX22516 Evaluation Kit

## MAX22516 EV Kit Bill of Materials (continued)

| REF DES         | DNI/DNP   |   QTY | VALUE          | DESCRIPTION                                                                                                                                                      |
|-----------------|-----------|-------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R32, R33        | -         |     2 | 27             | RES; SMT (0201); 27; 1%; +/-200PPM/DEGC; 0.0500W                                                                                                                 |
| R42             | -         |     1 | 1K             | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                 |
| SU1-SU6         | -         |     6 | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                          |
| SW1             | -         |     1 | 219-5MST       | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000M OHM                                                           |
| SW2             | -         |     1 | 219-10MST      | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000M OHM                                                           |
| TP1, TP3- TP5   | -         |     4 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                            |
| TP2, TP12- TP26 | -         |    16 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                         |
| TP6             | -         |     1 | 571-0500       | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MM RED SOCKET; RIGHT ANGLE; 2PINS                                                                                       |
| TP7             | -         |     1 | 571-0100       | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MM BLACK SOCKET; RIGHT ANGLE; 2PINS                                                                                     |
| TP9-TP11        | -         |     3 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                          |
| U1              | -         |     1 | MAX22516ATL+   | EVKIT PART - IC; IO-LINK DATA LINK CONTROLLER WITH TRANSCEIVER AND DC-DC; PACKAGE OUTLINE DRAWING: 21-140; PACKAGE LAND PATTERN: 90-0016; PACKAGE CODE: T4055+1C |
| U2              | -         |     1 | MAX17501EATB+  | IC; CONV; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN10-EP                                                                         |
| U3              | -         |     1 | 93LC66BT-I/OT  | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                                                                   |
| U4              | -         |     1 | FT2232HL       | IC; MMRY; DUAL HIGH-SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                  |
| Y1              | -         |     1 | 12MHZ          | CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-20PPM; STABILITY = +/-30PPM                                                                                                  |
| PCB             | -         |     1 | PCB            | PCB:MAX22516                                                                                                                                                     |
| D1-D3, D5, D6   | DNP       |     0 | 33V            | DIODE; TVS; SMT (DO-216AA); VRM=33V; IPP=7A                                                                                                                      |
| J7              | DNP       |     0 | 09 0431 212 04 | CONNECTOR; MALE; TH; MALE RECEPTACLE; THREADED; PCB SOLDER; STRAIGHT; 4PINS;                                                                                     |
| MOD1            | DNP       |     0 | MAX32620FTHR#  | EVKIT PART - MODULE; BOARD ASSEMBLY; THROUGH HOLE; RAPID DEVELOPMENT PLATFORM;                                                                                   |
| R8              | DNP       |     0 | 15K            | RES; SMT (0402); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                |
| R16, R17        | DNP       |     0 | 1K             | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                 |
| VR1             | DNP       |     0 | VC060326A580DP | VARISTOR; TVS; SMT (0603); VB=34.5V; IP=30A                                                                                                                      |

Evaluates: MAX22516

## MAX22516 Evaluation Kit

## MAX22516 EV Kit Schematic

<!-- image -->

Evaluates: MAX22516

## MAX22516 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX22516

## MAX22516 Evaluation Kit

## MAX22516 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX22516

<!-- image -->

## MAX22516 EV Kit PCB Layout

MAX22516 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX22516 EV Kit PCB Layout -Top

<!-- image -->

Evaluates: MAX22516

MAX22516 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX22516 EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX22516 EV Kit PCB Layout (continued)

MAX22516 EV Kit PCB Layout -Bottom

<!-- image -->

Evaluates: MAX22516

MAX22516 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## MAX22516 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/23           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX22516