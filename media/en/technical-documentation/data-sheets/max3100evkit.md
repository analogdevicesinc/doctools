<!-- lastmod 2022-08-02 -->
## General Description

The MAX3100 evaluation kit (EV kit) provides a proven design to evaluate the MAX3100 SPI™/MICROWIRE™ -compatible universal asynchronous receiver transmitter (UART). The EV kit also includes Windows 2000/XP/ Vista ® -compatible software that provides a simple graphical user interface (GUI) for exercising the features of the MAX3100.

The MAX3100 uses the SPI/MICROWIRE interface for communication with the on-board MAXQ2000 microcontroller (µC). The on-board DIP switches and momentary pushbutton switches are used to configure the MAX3100 internal registers.

The EV kit can be connected to a PC serial port directly or  through  a  straight-through  extension  cable.  The  PC is a data terminal equipment (DTE) device and the EV kit is a data communications equipment (DCE) device.

After the EV kit and the PC serial port are configured properly, the PC can send characters to the MAX3100. The on-board MAXQ2000 µC reads the received data from the MAX3100 and displays the characters on the onboard seven-segment LED or sends back data to the PC.

Other switches, jumpers, and pads are provided to modify the board to the numerous configurations available for the MAX3100.

| DESIGNATION            |   QTY | DESCRIPTION                                                         |
|------------------------|-------|---------------------------------------------------------------------|
| C1-C5, C8, C9, C12-C16 |    12 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C6, C7                 |     2 | 39pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H390J   |
| C10, C11               |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J   |
| C17                    |     1 | 10µF ±10%, 10V X5R ceramic capacitor (0805) Murata GRM21BR61A106K   |
| D1                     |     1 | Super red, 7-segment, common- cathode LED                           |
| D2, D3, D4             |     3 | Green LEDs (0603)                                                   |

SPI is a trademark of Motorola, Inc.

MICROWIRE is a trademark of National Semiconductor Corp.

Windows Vista is a registered trademark of Microsoft Corp.

<!-- image -->

## Features

- ♦ SPI/MICROWIRE-Compatible µC Interface
- ♦ On-Board µC Provides Flexible Configuration Possibilities
- ♦ Windows 2000/XP/Vista (32-Bit)-Compatible Software
- ♦ Lead-Free and RoHS-Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3100EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| J1            |     1 | DB-9 female R/A 0.318in D-SUB serial port connector   |
| J2            |     1 | 1 x 5 header                                          |
| J3            |     0 | Not installed, vertical 2 x 5-pin header              |
| JU1-JU4       |     4 | 2-pin headers                                         |
| JU5           |     1 | 2 x 8 header                                          |
| R1            |     1 | 150 Ω ±5%, 8-element chip resistor network (0603 x 8) |
| R2, R3, R4    |     3 | 10k Ω ±5% resistors (0603)                            |
| R5, R6, R7    |     3 | 150 Ω ±5% resistors (0603)                            |
| SW1-SW4       |     4 | Momentary pushbutton switches                         |
| SW5           |     1 | 8-position DIP switch, top-slide surface mount        |
| SW6           |     1 | 12-position DIP switch, top-slide surface mount       |

## MAX3100 Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| U1            |     1 | SPI/MICROWIRE-compatible UART (16 QSOP) Maxim MAX3100CEE+  |
| U2            |     1 | RS-232 transceiver (16 TSSOP) Maxim MAX3232ECUE+           |
| U3            |     1 | Microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+           |
| U4            |     1 | Digital temperature sensor (6 TDFN-EP*) Maxim MAX6626PMTT+ |
| U5            |     1 | LDO regulator (5 SC70) Maxim MAX8511EXK25+                 |
| U6            |     1 | Octal buffer (20 TSSOP)                                    |
| Y1            |     1 | 3.6864MHz crystal ECS ECS-36-20-5PX-TR                     |
| Y2            |     1 | 16MHz crystal Hong Kong X'tals SSM1600000E18FAF            |
| -             |    12 | Shunts                                                     |
| -             |     1 | DB9 male to DB9 female serial straight-through cable       |
| -             |     1 | PCB: MAX3100 Evaluation Kit+                               |

## Component Suppliers

Note: Indicate that you are using the MAX3100 when contacting these component suppliers.

| SUPPLIER                               | PHONE          | WEBSITE                     |
|----------------------------------------|----------------|-----------------------------|
| ECS, Inc. International                | 800-237-1401   | www.ecsxtal.com             |
| Hong Kong X'tals Ltd.                  | +852-3511-2388 | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300   | www.murata-northamerica.com |

## MAX3100 EV Kit Files

| FILE        | DESCRIPTION                                |
|-------------|--------------------------------------------|
| MAX3100.EXE | Application program                        |
| INSTALL.EXE | Installs the EV kit files on your computer |
| UNINST.INI  | Uninstalls the EV kit software             |

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX3100 EV kit (RS-232 serial cable included)
- 3.3V, 200mA DC power supply
- A user-supplied Windows 2000/XP/Vista PC with a spare serial RS-232 port OR
- A user-supplied Windows 2000/XP/Vista PC with a spare USB port and Maxim's USBTO232+ converter board

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX3100 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit  www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software, 3100Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The  program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Verify that all jumpers (JU1-JU5) are in their default positions, as shown in Table 1 (JU1, JU2: Open; JU3, JU4, JU5: 1-2).
- 4) Verify  that  both  DIP  switches  (SW5, SW6) are in their default positions, as shown in Tables 2 and 3 (all positions On).
- 5) Connect the EV kit to the PC using the RS-232 serial cable.
- 6) Connect the 3.3V power supply to the +3.3V and GND pads or headers on the EV kit board.
- 7) Turn on the 3.3V power supply. Verify that all segments of D1 are lit up, D2, D3, D4 are off.
- 8) Start  the  MAX3100 EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window appears, as shown in Figure 1.
- 9) Press the SW1 momentary pushbutton switch on the EV kit board. The µC reads SW5 and SW6 DIP switch states and configures MAX3100 through a write-configuration command. Refer to the MAX3100 IC data sheet for details.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Note: The EV kit sets the following MAX3100 register bits to a fixed logic because the µC firmware relies on these settings to function properly; a user cannot change these settings:

- FEN = 0 (FIFO Enable. Enables the receive FIFO when FEN = 0. When FEN = 1, FIFO is disabled.)
- TM = 1 (Mask for T bit. IRQ is  asserted  if TM = 1 and T = 1.)
- RM = 1 (Mask for R bit. IRQ is  asserted if RM = 1 and R = 1.)
- PM = 1 (Mask for Pr bit. IRQ is asserted if PM = 1 and Pr = 1.)
- RAM = 1 (Mask for RA/FE bit. IRQ is  asserted if RAM = 1 and RA/FE = 1.)
- 10) On the software GUI, accept the default settings for the PC UART. Click the Select Port drop-down list to select the COM port that connects to the EV kit. Press the Open button to open and configure the PC COM port setting as defined in the PC UART Setting group box. Check the status bar at the bottom of the GUI to verify that the port is opened successfully.

## MAX3100 Evaluation Kit

Note: Many PCs do not support 230.4kbps baud rate. If this  is  the  case,  select  a  lower  baud  rate  on  the  GUI and open the port. Change the B3-B0 settings on the EV kit board and press SW1 to configure the MAX3100 accordingly.

- 11) Click the up or down arrow on the spin box. The PC sends a single ASCII character to the EV kit. Verify that the seven-segment LED follows the GUI selections.

## Detailed Description of Software

The EV kit is only designed to demonstrate the features of  the  MAX3100. No robust error checking or flowcontrol algorithms are implemented. All data is in raw binary format without coding and decoding. A user should connect an oscilloscope to monitor the waveforms on the signal lines to better understand the data transactions.

The software main window includes seven group boxes, as shown in Figure 1.

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3100 Evaluation Kit

## Setting the PC UART

The PC UART Setting group box configures the PC serial port that communicates with the EV kit to the setting in the PC UART Setting group box. After the Open button is pressed and the port is opened successfully, the PC serial port settings cannot be changed until the port is closed. To change the PC serial port setting or release the serial ports, close the PC serial port by pressing the Close button.

For the PC serial port to communicate with the EV kit, both the PC and EV kit serial ports should be configured exactly the same. Set the SW5 and SW6 DIP switches on the EV kit board appropriately and then press and release SW1. The on-board µC reads DIP switch on/off states and writes a 16-bit word to configure the MAX3100.

## Reading the MAX3100 Configuration Register

Press the Read Conf. Reg. button inside the PC Sends a  Read Configuration Register Command to EV Kit group box to send a command (0x07) from the PC to the EV kit. When the µC receives and parses the meaning of the command, the µC reads the MAX3100 configuration register and groups the 14 register bits into 2 bytes. The µC then writes the 2 bytes to the MAX3100's write-data register. The PC receives the 2 bytes of data and displays the corresponding configuration-register bits on the GUI.

## Sending One ASCII Character to the EV Kit

The PC Sends One ASCII Character to EV Kit group box allows a user to select an ASCII character and send it  to  the  EV  kit.  Depending  on  the  UART  frame  length, the panel on the right displays the 7-bit or 8-bit binary digits  of  the  ASCII  character.  The PC adds start, stop, and parity bits according to the current UART settings.

When the MAX3100 receives the character, it generates an interrupt request to the µC by pulling the IRQ line low. The µC moves the data from the MAX3100 and displays the single digit on the seven-segment LED.

## Sending a Group of ASCII

## Characters to the EV Kit

The PC Sends a Group of Characters to EV Kit group box allows a user to type 50 characters (max) in the memo box and sends them to the EV kit. The format of the packet sent to the EV kit is as follows:

[Message Header (0x01)], [ASCII characters], [End of message (0x02)]

When the MAX3100 receives the characters, it generates interrupt requests to the µC by pulling the IRQ line

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

low. The µC should move the data from the first-in-firstout buffer (FIFO) quickly to avoid a buffer overflow. After  the  µC  receives  an  end-of-a-message byte, the µC displays the characters one after another, with approximately 0.5s delay between each character.

## Sending a Read Temp Sensor Command to the EV Kit

Press the Read Temp Sensor button inside the PC Sends a Read Temp Sensor Command to EV Kit group box to send a command (0x03) from the PC to the EV kit. When the µC receives and parses the meaning of the command, the µC gets temperature data (grouped in 2 bytes) from the on-board digital temperature sensor. The µC then writes the 2 bytes to the MAX3100's writedata register. Lastly, the PC receives the 2 bytes of data and displays the corresponding temperature.

Check the Auto Read Every 1 Second checkbox to monitor the temperature continuously. Place the tip of your finger on top of U4 to change the temperature.

## Sending a Read DIP Switch States Command to the EV Kit

Press the Read Switch States button inside the PC Sends a Read DIP Switch States Command to EV Kit group box to send a command (0x04) from the PC to the EV kit. When the IC receives and parses the meaning of the command, the µC gets DIP-switch data (grouped in 3 bytes). The µC then writes the 3 bytes to the MAX3100's write-data register. The PC receives the 3 bytes of data and displays the corresponding switch states on the GUI.

Check the Auto Read Every 1 Second checkbox to monitor the switch on/off states. Use the tip of a pen to change the switch positions.

Do not press SW1 unintentionally. Pressing SW1 reconfigures the MAX3100 from the current DIP-switch settings.

## PC Waits for SW2 or SW3 to Be Pressed on EV Kit

Press the Start Receiving Data button inside the PC Waits for SW2 or SW3 to be Pressed on EV Kit group box to prepare the software GUI for receiving a 0x05 or 0x06 byte from the EV kit. Press SW2 to send 0x05 or SW3 to send 0x06 to the PC. Press the Stop Receiving Data button to stop the PC from listening on the opened port. Do not press SW2 or SW3 on the EV kit if the PC is not expecting to receive data. For example, pressing SW2 or SW3 after the Stop Receiving Data button has been pressed corrupts other receiving operations (e.g., Read Temp Sensor or Read Switch States ).

<!-- image -->

## Detailed Description of Hardware

The MAX3100 EV kit uses the MAXQ2000-RAX as a host µC to communicate with the MAX3100 through the SPI interface. The µC converts received characters to a seven-segment LED display. The µC also implements a master I 2 C-compatible interface to communicate with the on-board MAX6626 temperature sensor.

The EV kit has a MAX3232 RS-232 transceiver to facilitate communication with a PC.

The EV kit is designed as a DCE device. The J1 female DB9 connector pin functions are shown in Figure 2. EV kit  TX line is connected to PC RX line. EV kit RX line is connected to PC TX line. EV kit RTS line is connected to PC CTS line. EV kit CTS line is connected to PC RTS line.

The data communication between the EV kit and the PC only requires TX and RX lines.

The logic of the RTS line (J2, pin 4) on the EV kit is controlled by the MAX3100's RTS configuration bit. RTS = 1 sets the RTS line to logic 0. RTS = 0 sets the RTS line to logic 1. The logic of the CTS line (J2, pin 5) on the EV kit  is  controlled  by  the  PC's  hardware flow control (MAX3100's CTS = 0, D3 = On; MAX3100's CTS = 1, D3 = Off).

## MAX3100 Evaluation Kit

## MAX3100 Baud Rate Generation

Bits B3-B0 in the MAX3100 write-configuration register determine the baud-rate divisor (BRD), which divides the X1 oscillator frequency. The MAX3100 internal oscillator operates with either a 1.8432MHz or a 3.6864MHz crystal, or is driven at X1 with a 45% to 55% duty-cycle square wave. The MAX3100 IC data sheet shows BRDs for  given  input  codes, as well as the baud rate for 1.8432MHz and 3.684MHz crystals. The generator's clock is 16 times the baud rate.

On the EV kit board, a 3.684MHz crystal is installed. A user can replace it with a 1.8432MHz crystal or remove Y1 and apply an external square wave on the EXTERNAL CLOCK pad.

A user should first set B3-B0 bits to the desired values on SW6 and then press and release SW1 to configure the MAX3100 BRD.

## Hardware Reset

Press SW4 on the EV kit to reset the µC and the MAX3100 to its initial power-on-reset (POR) state.

## Jumper and Switch Settings

See Tables 1, 2, and 3 for a description of the EV kit jumpers and switch settings.

<!-- image -->

Figure 2. EV Kit J1 Female DB9 Connector Pin Functions

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3100 Evaluation Kit

## Logic Loopback Test

Remove the shunts on JU3 and JU4 and place them on pins 1-2 and 4-5 of J2, respectively. Press SW2 on the EV kit board to send single-byte 0x05 on the TX line, which is looped back on the RX line. The µC receives this  byte  from  the  MAX3100 and displays it on the seven-segment LED.

Press SW3 to send single-byte 0x06 on the TX line, which is looped back on the RX line. The µC receives this byte and displays it on the seven-segment LED.

During the logic loopback test, RTS is  looped back to CTS .

## RS-232 Loopback Test

Disconnect the RS-232 serial cable from the EV kit. Place the shunts of JU1-JU4 in the 1-2 position. Press SW2 to send single-byte 0x05 on the TX line. The byte gets transmitted out of the MAX3232's transmitter line and loops back to the MAX3232's receiver line, as well as the MAX3100's RX line. The µC receives this byte from the MAX3100 and displays it on the seven-segment LED.

Press SW3 to send single-byte 0x06 on the TX line. The byte gets transmitted out of the MAX3232's transmitter line and loops back to the MAX3232's receiver line as well  as  the  MAX3100's RX line. The µC receives this byte from the MAX3100 and displays it on the LED.

During the RS-232 loopback test, the RTS line is looped back to the CTS line.

Table 1. MAX3100 EV Kit Jumper Descriptions (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU1      | Open*            | Normal operation                                                 |
| JU1      | 1-2              | Short RS-232 TX and RX lines for EV kit RS-232 loopback test     |
| JU2      | Open*            | Normal operation                                                 |
| JU2      | 1-2              | Short RS-232 RTS and CTS lines for EV kit RS-232 loopback test   |
| JU3      | 1-2*             | Normal operation                                                 |
| JU3      | Open             | Open to isolate MAX3100 logic RX line from RS-232 receiver line  |
| JU4      | 1-2*             | Normal operation                                                 |
| JU4      | Open             | Open to isolate MAX3100 CTS logic line from RS-232 receiver line |
| JU5      | 1-2*             | MAX3100 connected to the on-board µC                             |
| JU5      | Open             | MAX3100 connected to an external µC                              |

*Default position.

## Table 2. MAX3100 EV Kit DIP Switch SW5 Descriptions

| SWITCH   | POSITION   | DIP SWITCH STATES   | MAX3100 CONFIGURATION BITS   |
|----------|------------|---------------------|------------------------------|
| SW5-1    | On*        | SW5.1 = 0           | N/A                          |
| SW5-1    | Off        | SW5.1 = 1           | N/A                          |
| SW5-2    | On*        | SW5.2 = 0           | SHDNi = 0                    |
| SW5-2    | Off        | SW5.2 = 1           | SHDNi = 1                    |
| SW5-3    | On*        | SW5.3 = 0           | N/A                          |
| SW5-3    | Off        | SW5.3 = 1           | N/A                          |
| SW5-4    | On*        | SW5.4 = 0           | N/A                          |
| SW5-4    | Off        | SW5.4 = 1           | N/A                          |
| SW5-5    | On*        | SW5.5 = 0           | N/A                          |
| SW5-5    | Off        | SW5.5 = 1           | N/A                          |
| SW5-6    | On*        | SW5.6 = 0           | N/A                          |
| SW5-6    | Off        | SW5.6 = 1           | N/A                          |
| SW5-7    | On*        | SW5.7 = 0           | IR = 0                       |
| SW5-7    | Off        | SW5.7 = 1           | IR = 1                       |
| SW5-8    | On*        | SW5.8 = 0           | ST = 0                       |
| SW5-8    | Off        | SW5.8 = 1           | ST = 1                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3100 Evaluation Kit

Table 3. MAX3100 EV Kit DIP Switch SW6 Descriptions

| SWITCH   | POSITION   | DIP SWITCH STATES   | MAX3100 CONFIGURATION BITS   |
|----------|------------|---------------------|------------------------------|
| SW6-1    | On*        | SW6.1 = 0           | PE = 0                       |
| SW6-1    | Off        | SW6.1 = 1           | PE = 1                       |
| SW6-2    | On*        | SW6.2 = 0           | L = 0                        |
| SW6-2    | Off        | SW6.2 = 1           | L = 1                        |
| SW6-3    | On*        | SW6.3 = 0           | N/A                          |
| SW6-3    | Off        | SW6.3 = 1           | N/A                          |
| SW6-4    | On*        | SW6.4 = 0           | B3 = 0                       |
| SW6-4    | Off        | SW6.4 = 1           | B3 = 1                       |
| SW6-5    | On*        | SW6.5 = 0           | B2 = 0                       |
| SW6-5    | Off        | SW6.5 = 1           | B2 = 1                       |
| SW6-6    | On*        | SW6.6 = 0           | B1 = 0                       |
| SW6-6    | Off        | SW6.6 = 1           | B1 = 1                       |
| SW6-7    | On*        | SW6.7 = 0           | B0 = 0                       |
| SW6-7    | Off        | SW6.7 = 1           | B0 = 1                       |
| SW6-8    | On*        | SW6.8 = 0           | N/A                          |
| SW6-8    | Off        | SW6.8 = 1           | N/A                          |
| SW6-9    | On*        | SW6.9 = 0           | TE = 0                       |
| SW6-9    | Off        | SW6.9 = 1           | TE = 1                       |
| SW6-10   | On*        | SW6.10 = 0          | RTS = 0                      |
| SW6-10   | Off        | SW6.10 = 1          | RTS = 1                      |
| SW6-11   | On*        | SW6.11 = 0          | Pt = 0                       |
| SW6-11   | Off        | SW6.11 = 1          | Pt = 1                       |
| SW6-12   | On*        | SW6.12 = 0          | N/A                          |
| SW6-12   | Off        | SW6.12 = 1          | N/A                          |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3100 Evaluation Kit

Figure 3a. MAX3100 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3100 Evaluation Kit

Figure 3b. MAX3100 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3100 Evaluation Kit

Figure 4. MAX3100 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3100 Evaluation Kit

<!-- image -->

Figure 5. MAX3100 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3100 Evaluation Kit

Figure 6. MAX3100 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600