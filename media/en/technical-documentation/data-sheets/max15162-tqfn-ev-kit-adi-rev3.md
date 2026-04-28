<!-- lastmod 2024-06-07 -->
<!-- image -->

## Evaluates: MAX15162 (TQFN)

## General Description

The  MAX15162ATG  evaluation  kit  (EV  kit)  is  a  fully assembled  and  tested  surface-mount  circuit  board  that contains all components necessary to evaluate the MAX15162ATG+/MAX15162AATG+  dual-channel  circuit breaker IC for power amplifier system. The IC is in compact 24-pin, 4mm x 4mm TQFN package. The EV kit is powered from an 8V to 60V DC supply and can be configured as two independent  single-channel  or  one  parallel  dual-channel circuit  breaker. The EV kit provides multilevel overcurrentlimit  protection  and  pin-strap  programmable  current-limit level up to 1.5A for each channel.

The  EV  kit  demonstrates  the  full  functionality  of  the MAX15162ATG+/MAX15162AATG+,  such  as  IN-OUT short  protection  during  startup,  inrush  current  control, input undervoltage-lockout (UVLO), programmable overcurrent shutdown delay time and fast large overcurrent protection.  The  EV  kit  also  features  current  monitoring/ reporting  with  ±3%  accuracy  (0.8~1.5A)  on  individual channel  and  overcurrent/overtemperature  fault  status indication.

Warning: The EV kit is designed to operate with high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

©

Click here to ask an associate for production status of specific part numbers.

## MAX15162ATG Evaluation Kit

## Features

- 8V to 60V Wide Input Voltage Range
- Integrated Dual-Power MOSFET with Turn-on Resistance 200mΩ
- Dual-Channel Independent or Parallel Mode Configuration
- Undervoltage Lockout
- Enable Input for Individual Channel
- Constant Power Control at Startup
- Startup Watchdog Timer
- Startup IN-to-OUT Short Protection
- Overcurrent and Overtemperature Fault Status Indication on Individual Channel
- ±3% Accuracy Current Reporting on Individual Channel
- Multilevel Overcurrent Limit Protection
- Programmable Current-Limit Level
- Programmable Overcurrent Shutdown Delay Time
- Latch in a Fault Event (MAX15162ATG+)
- Auto-Retry in a Fault Event with Programmable AutoRetry Time (MAX15162AATG+)
- Built-in Thermal Shutdown Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX15162 (TQFN)

## Quick Start

## Required Equipment

- MAX15162ATG EV kit
- 8V to 60V, 5A capable DC power supply
- 3.3V DC power supply
- Two loads capable of supporting 60V and sinking 3A
- Digital voltmeters
- 100MHz dual-trace oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Configure IMONx and ENx pins with power supply off (x = 1, 2):
- a) Independent Mode: Leave R20 uninstalled (to disconnect IMON1 and IMON2); R23 and R19 configure OC limit of channel 1 and channel 2 separately. Leave R11 uninstalled to disconnect EN1 and EN2. Pull up pin 1 of J8 to enable channel 1; pull up pin 1 of J9 to enable channel 2. Leave J5 open.
- b) Parallel Mode: Install R20 = 0Ω to tie IMON1 and IMON2 together. The parallel of R19 and R23 set up the total OC limit of two channels. Install R11 = 0Ω to tie EN1 and EN2 together. Pull up pin 1 of J8 or J9 to enable both channels. Install shunt at J5 to short ALRT1 and ALRT2 .
- 2) Connect electronic loads to the output:
- a) Independent Mode: Connect two 1A electronic loads to OUT1+/OUT1- and OUT2+/OUT2banana jack connectors individually. Disable the load.
- b) Parallel Mode: Solder R33 (0Ω) to connect OUT1+ and OUT2+. Connect one 2A electronic load to OUT1+ and OUT1- banana jack connectors and disable the load.
- 3) Connect the external DC power supply to VIN and GND banana jack connectors. Turn on VIN at 0V and ramp it up to 8V or higher.
- 4) Using voltmeters, verify that the external 3.3V power supply provides EN = 3.3V and VOUT = VIN (VIN VOUT &lt; 700mV) across the OUT1+ (OUT2+) and OUT1- (OUT2-).

## MAX15162ATG Evaluation Kit

## Detailed Description of Hardware

The MAX15162ATG EV kit is a fully assembled and tested board to evaluate the performance of the MAX15162ATG+/ MAX15162AATG+ integrated dual-channel circuit breaker. With  the  wide  range  of  input  voltage  (from  8V  to  60V), inrush  current  control  and  programmable  overcurrent protection limit level, the MAX15162ATG+/ MAX15162AATG+  is  well  suited  for  telecommunication Power Amplifier systems. The EV kit features components and circuits that demonstrate the full functionality of the MAX15162ATG+/MAX15162AATG+ in both independent mode and parallel mode.

## Mode Configuration

The  MAX15162ATG+/MAX15162AATG+  device  detects IMONx  (x  =  1,  2)  pins  connection  during  initialization process and determines the operation mode. To configure the device in independent mode on the EV kit, leave R20 uninstalled. To configure the device in parallel mode, install R20 = 0Ω to tie IMONx together.

## Enable Input (ENx)

The dual channels of the MAX15162ATG+/ MAX15162AATG+ can be individually enabled or disabled through the ENx (x = 1, 2) by driving it above or below the Enable threshold voltage. The EV kit allows ENx pins to be pulled up by external DC bias power supply.

## Current-Limit Thresholds and Current Monitor (IMONx)

The EV kit configures overcurrent limit threshold through the  IMONx  pins  for  each  channel.  Connect  a  resistor between IMONx and GND to program the overcurrent limit threshold in the device. In independent mode, configure R23 and R19 individually. The following equation is used to calculate the current-limit setting resistor:

RIMON (Ω) = 1.125 x C IRATIO /ILIM (A)

In  parallel  mode,  connect  the  IMON1  and  IMON2  pins together  with  one  resistor  to  GND.  Use  the  following equation to calculate the current-limit setting resistor:

<!-- formula-not-decoded -->

where  ILIM  is  the  desired  current  limit,  and  C IRATIO   is the  ratio  of  current  mirror.  See  Table  2  and  Table  3  for current-limit  resistor  settings  in  independent  mode  and parallel mode.

## Evaluates: MAX15162 (TQFN)

At  the  same  time,  the  voltage  on  the  IMONx  pin  monitors the OUT current in each channel with the following relationship:

IOUT (A) = V IMON (V) x C IRATIO /R IMON (Ω)

## Table 1. Operating Mode Setting

| CONFIG RESISTOR   | SHUNT POSITION   | FUNCTION                           |
|-------------------|------------------|------------------------------------|
| R11               | 0 Ω              | Parallel mode: tie EN1 and EN2     |
| R11               | Open             | Independent mode                   |
| R20               | 0 Ω              | Parallel mode: tie IMON1 and IMON2 |
| R20               | Open             | Independent mode                   |
| R33               | 0 Ω              | Parallel mode: tie OUT1 and OUT2   |
| R33               | Open             | Independent mode                   |

## Table 2. Overcurrent Limit Resistor Selection in Independent Mode

| CONFIG RESISTOR   |   RESISTOR VALUE (k Ω) |   OVERCURRENT LIMIT/ CHANNEL (A) |   FAST OCP LIMIT/ CHANNEL (A) |
|-------------------|------------------------|----------------------------------|-------------------------------|
| R19, R23          |                   9.09 |                             0.5  |                          0.66 |
| R19, R23          |                   6.04 |                             0.75 |                          0.99 |
| R19, R23          |                   4.53 |                             0.99 |                          1.32 |
| R19, R23          |                   3.01 |                             1.5  |                          1.99 |

## Table 3. Overcurrent Limit Resistor Selection in Parallel Mode

| CONFIG RESISTOR   |   RESISTOR VALUE (k Ω) |   OVERCURRENT LIMIT/ CHANNEL (A) |   FAST OCP LIMIT/ CHANNEL (A) |
|-------------------|------------------------|----------------------------------|-------------------------------|
| R19, R23          |                   4.53 |                             0.5  |                          0.66 |
| R19, R23          |                   3.01 |                             0.75 |                          1    |
| R19, R23          |                   2.26 |                             0.99 |                          1.33 |
| R19, R23          |                   1.5  |                             1.5  |                          2    |

│

## MAX15162ATG Evaluation Kit

In independent mode, I OUT  in the above equation represents the current from the individual channel. In parallel mode,  while  connecting  the  IMON1  and  IMON2  pins together, I OUT  represents the sum of current of the two channels.

## Evaluates: MAX15162 (TQFN)

## Overcurrent Protection Delay (RDLY)

The EV kit configures the overcurrent protection response delay time by connecting the DLY pin and GND through resistor  R14,  as  shown  in  Table  4.  When  the  current through the device reaches the overcurrent limit threshold, the  internal  delay  timer  begins  to  count.  If  the  current drops  back  below  the  overcurrent  limit  within  the  delay time T DLY , the MOSFET remains on. If the current stays higher than the overcurrent limit, the MOSFET turns off after T DLY  elapses.

## Table 4. DLY Pin-Strap Configuration

|   R14 (k Ω) | DELAY TIME   | AUTORETRY TIME   |
|-------------|--------------|------------------|
|           0 | 12µs         | 0.6ms            |
|          27 | 100µs        | 6ms              |
|          47 | 1ms          | 60ms             |
|          68 | 10ms         | 600ms            |

│

## MAX15162ATG Evaluation Kit

## Fault Status Indication ( ALRTx )

The EV kit indicates fault status through the ALRTB pin in each channel. ALRTB is pulled low when the following faults occur:

- MOSFET is not turned on.
- Input voltage drops to UVLO level.
- Overcurrent limit is triggered.
- Overtemperature level is reached.
- Startup watchdog times out.
- IMONx pins are open.

## Evaluates: MAX15162 (TQFN)

## Component Suppliers

| SUPPLIER                 | WEBSITE                  |
|--------------------------|--------------------------|
| Analog Devices           | www.analog.com           |
| CoilCraft                | www.coilcraft.com        |
| Comchip                  | www.comchiptech.com      |
| Diodes Incorporated      | www. diodes.com          |
| Emerson Network Power    | www.vertivco.com         |
| Fairchild Semiconductor  | www.onsemi.com           |
| Kemet                    | www.ir.kemet.com         |
| Keystone                 | www.keyelco.com          |
| Lite-On Electronics      | www. us.liteon.com       |
| Murata                   | www.murata .com          |
| On Semiconductor         | www.onsemi.com           |
| Panasonic                | www.panasonic.com        |
| Pulse Electronics        | www.pulseelectronics.com |
| Renesas Technology Group | www.renesas.com          |
| Samsung Electronics      | www.samsung.com          |
| Stackpole Electronics    | www.seielect.com         |
| Sumida                   | www.sumida.com           |
| Taiyo Yuden              | www.yuden.co.jp          |
| TDK                      | www.us.tdk.com           |
| TE Connectivity          | www.te.com               |
| Texas Instruments        | www.ti.com               |
| Vishay Dale              | www.vishay.com           |
| Wurth Elektronik         | www.we-online.com        |

Note:

Indicate that you are using the MAXxxxx when contacting these component suppliers.

## Ordering Information

| PART             | TYPE                        |
|------------------|-----------------------------|
| MAX15162TAEVKIT# | MAX15162 TQFN (Autoretry)   |
| MAX15162TLEVKIT# | MAX15162 TQFN (Latched off) |

Evaluates: MAX15162

(TQFN)

## MAX15162ATG EV Kit Bill of Materials

| PART                                 | QTY   | DESCRIPTION                                                                                         |
|--------------------------------------|-------|-----------------------------------------------------------------------------------------------------|
| C1                                   | 1     | 47ΜF ±20%, 100V;ALUMINUM ELECTROLYTIC CAPACITOR (CASE H13) PANASONIC EEE-FK2A470AQ                  |
| C10-C17                              | 8     | 4.7ΜF ±10%, 100V X7S CERAMIC CAPACITOR (1210) TDK C3225X7S2A475K200AB                               |
| C3                                   | 1     | 1ΜF ±10%, 100V X7R CERAMIC CAPACITOR (1206) MURATAGRM31CR72A - 105KA01                              |
| GND, OUT1+, OUT1-, OUT2+, OUT2-, VIN | 6     | SOFT DRAWN BUS TYPE-S, 20AWG, WEICO WIRE, 9020 BUSS                                                 |
| IMON1, IMON2                         | 2     | TEST POINT; PIN DIA = 0.1 INCH; TOTAL LENGTH = 0.3 INCH; BOARD HOLE = 0.04 INCH; RED; KEYSTONE 5000 |
| J5, J8, J9                           | 3     | BREAKAWAY CONNECTOR, MALE, THROUGH HOLE, 3 PINS, SULLINS, PBC03SAAN                                 |
| R14                                  | 1     | 68KΩ ±1% RESISTOR (0402) VISHAY CRCW040268K0FK                                                      |
| R19, R23                             | 2     | 3.01KΩ ±1% RESISTOR (0402) VISHAY CRCW04023K01FK                                                    |
| U1                                   | 1     | INTEGRATED DUAL-CHANNEL CIRCUIT BREAKER, TQFN-24, MAX15162/MAX15162AATG+                            |
| PCB                                  | 1     | PCB:MAX15162ATG+/MAX15162AATG+ EVKITB#                                                              |
| C4-C8                                | DNP   | 1ΜF ±10%, 100V X7R CERAMIC CAPACITOR (1206) MURATA GRM31CR72A105KA01                                |
| R11, R20                             | DNP   | 0Ω ±0% RESISTOR (0402) VISHAY CRCW04020000Z0EDHP                                                    |
| R33                                  | DNP   | 0Ω ±0% RESISTOR (2512) VISHAY CRCW25120000Z0EGHP                                                    |

│

## MAX15162ATG Evaluation Kit

## Evaluates: MAX15162 (TQFN)

## MAX15162ATG EV Kit Schematic

<!-- image -->

│

Evaluates: MAX15162

(TQFN)

## MAX15162ATG EV Kit PCB Layout Diagrams

<!-- image -->

MAX15162ATG EV Kit PCB - Silkscreen Top Side

│

## Evaluates: MAX15162 (TQFN)

## MAX15162ATG EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX15162ATG EV Kit PCB - Silkscreen Top Side

│

## Evaluates: MAX15162 (TQFN)

## MAX15162ATG EV Kit PCB Layout Diagrams (continued)

MAX15162ATG EV Kit PCB - Internal Layer 2

<!-- image -->

│

## Evaluates: MAX15162 (TQFN)

## MAX15162ATG EV Kit PCB Layout Diagrams (continued)

MAX15162ATG EV Kit PCB - Internal Layer 3

<!-- image -->

.

│

## Evaluates: MAX15162 (TQFN)

## MAX15162ATG EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX15162ATG EV Kit PCB - Bottom Side

│

## Evaluates: MAX15162 (TQFN)

## MAX15162ATG EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX15162ATG EV Kit PCB - Silkscreen Bottom Side

│

## Evaluates: MAX15162 (TQFN)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------|-----------------|
|                 0 | 1/20            | Initial release                                 | -               |
|                 1 | 10/20           | Change to Rev B EV kit                          | 2-13            |
|                 2 | 10/21           | Changed title to indicate TQFN                  | All             |
|                 3 | 11/22           | Updated resistors and jumpers to match hardware | 2-4, 6          |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

## MAX15162ATG Evaluation Kit