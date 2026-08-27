<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX9611PMB1 Peripheral Module

## General Description

The  MAX9611PMB1  peripheral  module  provides  the necessary hardware to interface the  MAX9611 currentsense  amplifier  with  12-bit  ADC  and  op  amp,  along with the MAX5380 8-bit DAC, to any system that utilizes Pmod K -compatible  expansion  ports  configurable  for I 2 C  communication. The IC is configured with an external p-channel FET and a current-sense resistor to form a  current-limiting  circuit  capable  of  handling  currents up to 1A. An 8-bit DAC (U1) is used to set the currentlimit point programmatically by the host through the I 2 C bus.  In  addition  to  providing  a  programmable  currentlimit  function, the ADC within the IC measures the load current/voltage  and  the  set-point  voltage  that  can  be read by the host through the I 2 C bus.

Refer to the MAX9611 IC data sheet for detailed information regarding operation of the IC.

## Features

- S Programmable Current Limit Up to 1A
- S Two Current Ranges (Jumper Selectable)
- S Measure and Read Back Load Current, Load Voltage, and Set Point
- S Power Source Up to 30V
- S Jumper-Selectable I 2 C Address Setting for the MAX9611
- S 6-Pin Pmod-Compatible Connector (I 2 C)
- S Secondary Header Allows Daisy-Chaining of Additional Modules on the I 2 C Bus
- S Example Software Written in C for Portability
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX9611PMB1 Peripheral Module

<!-- image -->

Pmod is a trademark of Digilent Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9611PMB1 Peripheral Module

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| Q1            |     1 | 2.2A, 30V p-channel MOSFET (3 SOT23) Vishay Si2303CDS                   |
| R1-R5         |     5 | 4.7k I Q 1% resistors (0603)                                            |
| R6, R7        |     2 | 150 I Q 5% resistors (0603)                                             |
| R8            |     1 | 7.5k I Q 1% resistor (1206)                                             |
| R9            |     1 | 845 I Q 1% resistor (1206)                                              |
| R10           |     1 | 4.02k I Q 1% resistor (0603)                                            |
| R11           |     1 | 402 I Q 1% resistor (0603)                                              |
| R12           |     1 | 8.06k I Q 1% resistor (0603)                                            |
| R13           |     1 | 0.2 I Q 1%, 2W current-sense resistor (2512) Stackpole CSRN2512FKR200   |
| R14, R15      |     2 | 10k I Q 5% resistors (0603)                                             |
| U1            |     1 | Low-cost, 8-bit DAC (5 SOT23) Maxim MAX5380MEUK+                        |
| U2            |     1 | Current-sense amplifier with 12-bit ADC (10 F MAX M ) Maxim MAX9611AUB+ |
| -             |     3 | Shorting jumpers                                                        |
| -             |     1 | PCB: EPCB9611PM1                                                        |

## Component Suppliers

| DESIGNATION       |   QTY | DESCRIPTION                                                                |
|-------------------|-------|----------------------------------------------------------------------------|
| C1, C2, C3        |     3 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104KA01D |
| C4                |     1 | 4.7 F F Q 10%, 10V X5R ceramic capacitor (0603) TDK C2012X5R1A475K/0.85    |
| C5                |     1 | 10 F F Q 10%, 10V X5R ceramic capacitor (0603) TDK C2012X5R1A106K/1.25     |
| C6                |     1 | 1 F F Q 10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A105K           |
| C7                |     1 | 0.01 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C103KA01D |
| F1                |     1 | 4.7 F F EMI filter (3-terminal capacitor) Murata NFM21PC475B1A3D           |
| J1                |     1 | 6-pin right-angle male header                                              |
| J2                |     1 | 8-pin (2 x 4) straight male header                                         |
| J3, JP1, JP2, JP3 |     4 | 3-pin straight male headers                                                |

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX9611PMB1 when contacting these component suppliers.

## Detailed Description

## I 2 C Interface

The MAX9611PMB1 peripheral module can interface to the  host  in  one  of  two  ways.  It  can  plug  directly  into  a Pmod-compatible port (configured for I 2 C) through connector J1, or in this case, other I 2 C boards can attach to the same I 2 C bus through connector J2.

## I 2 C Interface (Daisy-Chaining Modules)

Alternatively, the peripheral module can connect to other I 2 C-based  Pmod  modules  using  a  4-conductor  ribbon cable connecting to the J2 connector. In this situation, pins 1-4 and 5-8 on J2 provide two connections to the I 2 C  bus, allowing the module to be inserted into an I 2 C bus daisy-chain.

µMAX is a registered trademark of Maxim Integrated Products,

Inc.

<!-- image -->

## Table 1. Connector J1 (I 2 C Communication)

|   PIN | SIGNAL   | DESCRIPTION        |
|-------|----------|--------------------|
|     1 | N.C.     | Not connected      |
|     2 | N.C.     | Not connected      |
|     3 | SCL      | I 2 C serial clock |
|     4 | SDA      | I 2 C serial data  |
|     5 | GND      | Ground             |
|     6 | VCC      | Power supply       |

Connector J1 provides connection of the module to the Pmod host. The pin assignments and functions adhere to  the  Pmod  standard  recommended  by  Digilent.  See Table 1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9611PMB1 Peripheral Module

Connector J2 allows the module to be connected through a  daisy-chain  from  another  I 2 C  module  and/or  provide I 2 C and power connections to other I 2 C modules on the same bus. See Table 2.

## I 2 C Addressing Options

Both  the  MAX5380M  and  MAX9611  reside  on  the  I 2 C bus.  The  MAX5380M  has  a  fixed  I 2 C  slave  address  of 0x62 (other versions of the MAX5380 are available with different  I 2 C  slave  addresses).  The  I 2 C  slave  address for  the  MAX9611  can  be  one  of  nine  different  values depending  on  the  settings  on  jumpers  JP2  and  JP3. Table 3 lists the settings of those jumpers and the corresponding values of the slave read and write address. Refer to the MAX9611/MAX9612 IC data sheet for more information.

## Table 2. Connector J2 (I 2 C Expansion)

|   PIN | SIGNAL   | DESCRIPTION        |
|-------|----------|--------------------|
|     1 | SCL      | I 2 C serial clock |
|     2 | SDA      | I 2 C serial data  |
|     3 | GND      | Ground             |
|     4 | VCC      | Power supply       |
|     5 | SCL      | I 2 C serial clock |
|     6 | SDA      | I 2 C serial data  |
|     7 | GND      | Ground             |
|     8 | VCC      | Power supply       |

## Table 3. I 2 C Slave Addresses (MAX9611)

| JP2 (A0)   | JP3 (A1)   | DEVICE ADDRESS (hex)   | DEVICE ADDRESS (hex)   |
|------------|------------|------------------------|------------------------|
| JP2 (A0)   | JP3 (A1)   | WRITE                  | READ                   |
| 1-2        | 1-2        | 0xE0                   | 0xE1                   |
| 1-2        | 2-3        | 0xE4                   | 0xE5                   |
| 1-2        | Open       | 0xE6                   | 0xE7                   |
| 2-3        | 1-2        | 0xF0                   | 0xF1                   |
| 2-3        | 2-3        | 0xF4                   | 0xF5                   |
| 2-3        | Open       | 0xF6                   | 0xF7                   |
| Open       | 1-2        | 0xF8                   | 0xF9                   |
| Open       | 2-3        | 0xFC                   | 0xFD                   |
| Open       | Open       | 0xFE                   | 0xFF                   |

<!-- image -->

## Connecting an External Power Supply and Load

The peripheral module provides high-side current limiting for an external power supply and load. The supply and load should be connected to the peripheral module, as shown in Figure 1. Although the IC is capable of operation up to 60V, the external supply should not exceed 30V due to voltage limitations of the Si2303 pFET. While the  pass  components  are  rated  to  2.7A, operation above 1A may not yield reliable results due to thermal limitations.  Reliable  operation  of  this  circuit  above  1A should be possible in the user's application if additional surface/heatsink area for both the Si2303 pFET and the 0.2 I sense resistor is provided.

The J3 connector provides for the attachment of an external power supply and load. See Table 4.

## Table 4. Connector J3 (External Power and Load)

Figure 1. Connection of an External Power Supply and Load

|   PIN | SIGNAL       | DESCRIPTION                                                                                                                                               |
|-------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | Power source | This pin should be attached to the positive terminal of the external power supply. The external power source should be greater than 0V and less than 30V. |
|     2 | Load         | This pin should be attached to a ground- referenced load.                                                                                                 |
|     3 | Ground       | External ground. This ground connection is referenced to the module ground on pin 5 of connector J1.                                                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9611PMB1 Peripheral Module

## Current Limit

The point at which current limiting begins is determined by the voltage at pin 4 on the MAX9611 (V SET ). This voltage is set by the output of the DAC (MAX5380) and the setting of the shunt on JP1, which selects either V DAC  or VDAC/10. The nominal 2.00V output of the DAC is divided to 1.26V full scale by the divider formed by R3 and R8 +  R9.  The  lower  tap  of  that  divider  (R3  +  R8  and  R9) provides 0.126V full scale. The position of the shunt on JP1 determines which of the two voltages is connected to  V SET   on  the  MAX9611.  With  the  shunt  connected between JP1-1 and JP1-2, the higher voltage (V DAC ) is connected to V SET . This setting allows full-scale current limit at 2.56A with 10mA steps ( Caution: Although software settings do not prohibit it, the circuit should not be operated  above  1A  output  current  as  overheating  and unreliable operation could result). When the shunt is connected between JP1-2 and JP1-3, the full-scale current is 256mA with 1mA steps.

Important: The total power dissipation for the pass FET (Q1) should not exceed 1.5W. This can easily be exceeded with even moderate output current if the load voltage is high and the load resistance is low.

The  JP1  connector  determines  the  current-limit  range and step size. Note: Do not operate the board without a shunt in place, in one of these two positions. See Table 5.

## Table 5. Jumper JP1 (Current-Limit Range)

| SHUNT POSITION   | VSET     |   FULL-SCALE CURRENT LIMIT (A) |   CURRENT- LIMIT STEP SIZE (mA) |
|------------------|----------|--------------------------------|---------------------------------|
| 1-2              | VDAC     |                           2.56 |                              10 |
| 2-3              | V DAC/10 |                          0.256 |                               1 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Software and FPGA Code

Example software and drivers are available that execute directly  without  modification  on  several  FPGA  development  boards  that  support  an  integrated  or  synthesized microprocessor. These boards include the Digilent Nexys  3,  Avnet  LX9,  and  Avnet  ZEDBoard,  although other platforms can be added over time. Maxim provides complete  Xilinx  ISE  projects  containing  HDL,  Platform Studio, and SDK projects. In addition, a synthesized bit stream,  ready  for  FPGA  download,  is  provided  for  the demonstration application.

The  software  project  (for  the  SDK)  contains  several source  files  intended  to  accelerate  customer  evaluation  and  design.  These  include  a  base  application (maximModules.c)  that  demonstrates  module  functionality  and  uses  an  API  interface  (maximDeviceSpecific Utilities.c)  to  set  and  access  Maxim  device  functions within a specific module.

The source code is written in standard ANSI C format, and all API documentation including theory/operation, register description,  and  function  prototypes  are  documented  in the API interface file (maximDeviceSpecificUtilities.h &amp; .c).

The  complete  software  kit  is  available  for  download  at www.maxim-ic.com .  Quick  start  instructions  are  also available as a separate document.

## MAX9611PMB1 Peripheral Module

<!-- image -->

Figure 2. MAX9611PMB11 Peripheral Module Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9611PMB1 Peripheral Module

<!-- image -->

Figure 3. MAX9611PMB11 Peripheral Module Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX9611PMB11 Peripheral Module PCB Layout-Component Side

<!-- image -->

Figure 5. MAX9611PMB11 Peripheral Module PCB Layout-Inner Layer 1 (Ground)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9611PMB1 Peripheral Module

<!-- image -->

Figure 6. MAX9611PMB11 Peripheral Module PCB Layout-Inner Layer 2 (Power)

<!-- image -->

Figure 7. MAX9611PMB11 Peripheral Module PCB Layout-Solder Side

<!-- image -->

Figure 8. MAX9611PMB11 Peripheral Module Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX9611PMB1# | Peripheral Module |

# Denotes RoHS compliant.

## MAX9611PMB1 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9