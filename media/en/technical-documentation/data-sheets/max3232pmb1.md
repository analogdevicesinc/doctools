<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX3232PMB1 Peripheral Module

## General Description

The  MAX3232PMB1  peripheral  module  provides  the necessary  hardware  to  interface  the  MAX3232E  true RS-232 transceiver to any system that utilizes Pmod TM compatible expansion ports configurable for UART communication. The IC has two receivers and two transmitters  that  are  used  to  implement  RS-232  data  transmit and receive channels along with optional CTS and RTS handshaking.  The  RS-232  side  input  and  output  levels are  true  RS-232,  achieved  by  incorporation  of  a  dual internal charge pump.

Refer to the MAX3232E IC data sheet for detailed information regarding operation of the IC.

## Features

- S Transmitter Output and Receiver Inputs Protected to Q 15kV
- S Implements RS-232 DCE
- S True RS-232 Levels from Single 3.3V Supply
- S 6-Pin Pmod-Compatible Connector (Pmod Interface Type 4 UART)
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX3232PMB1 Peripheral Module

<!-- image -->

Pmod is a trademark of Digilent Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4 or visit Maxim's website at www.maxim-ic.com.

## MAX3232PMB1 Peripheral Module

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| JP1           |     1 | 4-pin (2 x 2) straight male header                            |
| R1-R4         |     4 | 150 I Q 5% resistors (0603)                                   |
| U1            |     1 | 3.0V to 5.5V RS-232 transceiver (16 TSSOP) Maxim MAX3232EEUE+ |
| -             |     2 | Shorting jumper                                               |
| -             |     1 | PCB: EPCB3232PM1                                              |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX3232PMB1 when contacting these component suppliers.

## Detailed Description

## UART Interface

The MAX3232PMB1 peripheral module can interface to the  host  by  plugging  directly  into  a  Pmod-compatible port (configured for UART) through connector J1.

J1 provides connection of the module to the Pmod host. The  pin  functions  and  pin  assignments  adhere  to  the Pmod UART Type 4 standard recommended by Digilent. See Table 1.

This J2 connector is meant to interface to a data terminal (DTE) through a standard RS-232 cable or a DCE device through a null-modem RS-232 cable. See Table 2.

## Jumper JP1 (CTS/RTS)

This  jumper  port  allows  CTS  and  RTS  to  be  passed through,  looped  back,  or  disconnected  from  the  local and remote system. In most applications, these jumpers should be set in pass-through mode with pins 1-2 and 3-4 shorted.

<!-- image -->

## Table 1. Connector J1 (UART Communication)

|   PIN | SIGNAL   | DESCRIPTION                                                                                                            |
|-------|----------|------------------------------------------------------------------------------------------------------------------------|
|     1 | CTS-H    | Clear to send. This pin carries the clear- to-send signal from the connected DTE to the Pmod system.                   |
|     2 | TXD-H    | Host transmit. This pin carries the transmit data from the Pmod system UART transmitter to a connected DTE receiver.   |
|     3 | RXD-H    | Host receive. This pin carries the receive data from the connected DTE transmitter to the Pmod system's UART receiver. |
|     4 | RTS-H    | Ready to send. This pin carries the ready to send signal from the Pmod system to a connected DTE.                      |
|     5 | GND      | Ground                                                                                                                 |
|     6 | VCC      | Power supply                                                                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C1            |     1 | 2.2 F F Q 10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A225K/0.80    |
| C2-C6         |     5 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104KA01D |
| J1            |     1 | 6-pin right-angle male header                                              |
| J2            |     1 | Right-angle DB9 female connector                                           |

## MAX3232PMB1 Peripheral Module

## Table 2. Connector J2 (Female DB9)

|   PIN | SIGNAL   | DESCRIPTION                                                    |
|-------|----------|----------------------------------------------------------------|
|     1 | DCD      | Carrier detect. Carrier detect is shorted to pins 1, 4, and 6. |
|     2 | TXD      | RS-232 transmit from Pmod system to the DTE                    |
|     3 | RXD      | RS-232 receive from the DTE to the Pmod system                 |
|     4 | DTR      | Data terminal ready. Shorted to pins 1, 4, and 6.              |
|     5 | GND      | RS-232 signal and shield ground                                |
|     6 | DSR      | Data set ready. Shorted to pins 1, 4, and 6.                   |
|     7 | CTS      | Clear to send. CTS from DTE to the Pmod system.                |
|     8 | RTS      | Ready to send. RTS from Pmod system to the DTE.                |
|     9 | RI       | Ring indicator. Not connected.                                 |

<!-- image -->

## Software and FPGA Code

Example software and drivers are available that execute directly  without  modification  on  several  FPGA  development  boards  that  support  an  integrated  or  synthesized microprocessor. These boards include the Digilent Nexys  3,  Avnet  LX9,  and  Avnet  ZEDBoard,  although other platforms can be added over time. Maxim provides complete  Xilinx  ISE  projects  containing  HDL,  Platform Studio, and SDK Projects. In addition, a synthesized bit stream,  ready  for  FPGA  download,  is  provided  for  the demonstration application.

The  software  project  (for  the  SDK)  contains  several source  files  intended  to  accelerate  customer  evaluation  and  design.  These  include  a  base  application (maximModules.c)  that  demonstrates  module  functionality  and  uses  an  API  interface  (maximDeviceSpecific Utilities.c)  to  set  and  access  Maxim  device  functions within a specific module.

The source code is written in standard ANSI C format, and all API documentation including theory/operation, register description, and function prototypes are documented in the API interface file (maximDeviceSpecificUtilities.h &amp; .c).

The  complete  software  kit  is  available  for  download  at www.maxim-ic.com .  Quick  start  instructions  are  also available as a separate document.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3232PMB1 Peripheral Module

<!-- image -->

Figure 1. MAX3232PMB1 Peripheral Module Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3232PMB1 Peripheral Module

<!-- image -->

Figure 2. MAX3232PMB1 Peripheral Module Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX3232PMB1 Peripheral Module PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3232PMB1 Peripheral Module

<!-- image -->

Figure 4. MAX3232PMB1 Peripheral Module PCB Layout-Inner Layer 1 (Power)

<!-- image -->

Figure 5. MAX3232PMB1 Peripheral Module PCB Layout-Inner Layer 2 (Ground)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3232PMB1 Peripheral Module

<!-- image -->

Figure 6. MAX3232PMB1 Peripheral Module PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX3232PMB1 Peripheral Module Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX3232PMB1# | Peripheral Module |

# Denotes RoHS compliant.

## MAX3232PMB1 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9