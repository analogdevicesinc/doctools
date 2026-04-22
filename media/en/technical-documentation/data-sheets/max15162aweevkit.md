<!-- lastmod 2023-08-15 -->
<!-- image -->

## Evaluates: MAX15162

(WLP)

## General Description

The MAX15162AWE evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  that  contains  all components necessary to evaluate the MAX15162AWE+ and MAX15162AAWE+ dual-channel circuit breaker IC for power amplifier system. The IC is in an extremely compact, 16-bump, 2mm x 2mm WLP. The EV kit is powered from an  8V  to  60V  DC  supply  and  can  be  configured  as  two independent  single-channel  or  one  parallel  dual-channel circuit breaker. The EV kit provides multilevel overcurrent limit  protection  and  pin-strap  programmable  current-limit level up to 1.5A for each channel.

The  EV  kit  demonstrates  the  full  functionality  of  the MAX15162AWE+/MAX15162AAWE+,  such  as  IN-OUT short  protection  during  startup,  inrush  current  control, input undervoltage lockout (UVLO), programmable overcurrent shutdown delay time and fast large overcurrent  protection.  The  EV  kit  also  features  current monitoring/reporting  with  ±3%  accuracy  (0.8A~1.5A)  on individual channel and overcurrent/overtemperature fault status indication.

Warning: The  EV  kit  is  designed  to  operate  with  high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate  large  amounts  of  power,  which  could  result  in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

©

Click here to ask an associate for production status of specific part numbers.

## MAX15162AWE Evaluation Kit

## Features

- 8V to 60V Wide Input Voltage Range
- Integrated Dual-Power MOSFET with Low Turn-on Resistance 150mΩ
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
- Latch in a Fault Event (MAX15162AWE+)
- Auto-Retry in a Fault Event with Programmable Auto-Retry Time (MAX15162AAWE+)
- Built-in Thermal Shutdown Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX15162 (WLP)

## Quick Start

## Required Equipment

- MAX15162AWE EV kit
- 8V to 60V, 5A capable DC power supply
- 3.3V DC power supply
- Two loads capable of supporting 60V and sinking 3A
- Digital voltmeters
- 100MHz dual-trace oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Configure IMONx and ENx pins with the power supply off (x = 1, 2):
- a. Independent  Mode: Leave  R24  uninstalled  to disconnect IMON1 and IMON2; R23 and R19 con -figure OC limit of channel 1 and channel 2 sepa -rately.  Leave  R40  uninstalled  to  disconnect  EN1 and EN2. Pull up pin 1 of J8 to enable channel 1, pull up pin 1 of J4 to enable channel 2. Leave J5 open.
- b. Parallel Mode: Install R24 = 0Ω to tie IMON1 and IMON2 together. The parallel of R19 and R23 set up the total OC limit of two channels. Install R40 = 0Ω to tie EN1 and EN2 together. Pull up pin 1 of J4 or J8 to enable both channels. Install a shunt at J5 to short ALRT1 and ALRT2 .
- 2) Connect electronic loads to the output:
- a. Independent Mode: Connect two 1A electronic loads to OUT1+/OUT1- and OUT2+/OUT2- banana jack connectors individually. Disable the load.
- b. Parallel Mode: Solder R33 (0Ω) to connect OUT1+ and  OUT2+.  Connect  one  2A  electronic  load  to OUT1+ and OUT1- banana jack connectors and disable the load.
- 3) Connect  the  external  DC  power  supply  to  VIN  and GND banana jack connectors. Turn on VIN at 0V and ramp it up to 8V or higher.
- 4) Using voltmeters, verify that the external 3.3V power sup -ply provides EN = 3.3V and VOUT = VIN (VIN - VOUT &lt; 700mV) across OUT1+ (OUT2+) and OUT1- (OUT2-).

## MAX15162AWE Evaluation Kit

## Detailed Description of Hardware

The MAX15162AWE EV kit is a fully assembled and tested board to evaluate the performance of the MAX15162AWE+/ MAX15162AAWE+ integrated dual-channel circuit breaker.  With  the  wide  range  of  input  voltage  (from 8V  to  60V),  inrush  current  control,  and  programmable overcurrent  protection  limit  level,  the  MAX15162AWE+/ MAX15162AAWE+  is  well  suited  for  telecommunication power amplifier systems. The EV kit features components and circuits  that  demonstrate  the  full  functionality  of  the MAX15162AWE+/MAX15162AAWE+ in both independent mode and parallel mode.

## Mode Configuration

The MAX15162AWE+/MAX15162AAWE+ devices detect IMONx  (x  =  1,  2)  pins  connection  during  initialization process and determines the operation mode. To config -ure the device in independent mode on the EV kit, leave R24 uninstalled. To configure the device in parallel mode, install  R24 = 0Ω to tie IMONx together. See Table 1 for operating mode settings.

## Enable Input (ENx)

The dual channels of the MAX15162AWE+/ MAX15162AAWE+ can be individually enabled or disabled through the ENx (x = 1, 2) by driving it above or below the enable threshold voltage. The EV kit allows the ENx pins to be pulled up by an external DC bias power supply.

## Table 1. Operating Mode Setting

| CONFIG RESISTOR   | SHUNT POSITION   | FUNCTION                           |
|-------------------|------------------|------------------------------------|
| R40               | 0 Ω              | Parallel mode: tie EN1 and EN2     |
| R40               | Open             | Independent mode                   |
| R24               | 0 Ω              | Parallel mode: tie IMON1 and IMON2 |
| R24               | Open             | Independent mode                   |
| R33               | 0 Ω              | Parallel mode: tie OUT1 and OUT2   |
| R33               | Open             | Independent mode                   |

## Evaluates: MAX15162 (WLP)

## Current-Limit Thresholds and Current Monitor (IMONx)

The EV kit configures overcurrent limit threshold through the IMONx pins for each channel. Connect a resistor between IMONx and GND to program the overcurrent limit threshold in the device. In independent mode, configure R23 and R19 individually. The following equation is used to calculate the current-limit setting resistor:

<!-- formula-not-decoded -->

In parallel mode, connect IMON1 and IMON2 pins together with one resistor to GND. Use the following equation to calculate the current-limit setting resistor:

<!-- formula-not-decoded -->

where  ILIM  is  the  desired  current  limit,  and  C IRATIO is the  ratio  of  current  mirror.  See Table  2  and Table  3 for current-limit  resistor  settings  in  independent  mode  and parallel mode.

At the same time, the voltage on the IMONx pin monitors the OUT current in each channel with the following relationship:

<!-- formula-not-decoded -->

In independent mode, I OUT  in above equation represents the  current  from  individual  channel.  In  parallel  mode, while  connecting  the  IMON1  and  IMON2  pins  together, I OUT represents the sum of current of two channels.

## MAX15162AWE Evaluation Kit

## Overcurrent Protection Delay (RDLY)

The EV kit configures the overcurrent protection response delay time by connecting DLY pin and GND through resis -tor R14, as shown in Table 4. When the current through the  device  reaches  the  overcurrent  limit  threshold,  the internal delay timer begins to count. If the current drops back  below  the  overcurrent  limit  within  the  delay  time T DLY , the MOSFET remains on. If the current stays higher than  the  overcurrent  limit,  the  MOSFET  turns  off  after T DLY  elapses.

## Fault Status Indication ( ALRT x)

The EV kit indicates fault status through the ALRTB pin in each channel. ALRTB is pulled low when the following faults occur:

- MOSFET is not turned on.
- Input voltage drops to UVLO level.
- Overcurrent limit is triggered.
- Overtemperature level is reached.
- Startup watchdog times out.
- IMONx pins are open.

Table 2. Overcurrent Limit Resistor Selection in Independent Mode

| CONFIG RESISTOR   |   RESISTOR VALUE (kΩ) |   OVERCURRENT LIMIT/ CHANNEL (A) |   FAST OCP LIMIT/ CHANNEL (A) |
|-------------------|-----------------------|----------------------------------|-------------------------------|
| R19, R23          |                  9.09 |                             0.5  |                          0.66 |
| R19, R23          |                  6.04 |                             0.75 |                          0.99 |
| R19, R23          |                  4.53 |                             0.99 |                          1.32 |
| R19, R23          |                  3.01 |                             1.5  |                          1.99 |

## Table 3. Overcurrent Limit Resistor Selection in Parallel Mode

| CONFIG RESISTOR   |   RESISTOR VALUE (kΩ) |   OVERCURRENT LIMIT/ CHANNEL (A) |   FAST OCP LIMIT/ CHANNEL (A) |
|-------------------|-----------------------|----------------------------------|-------------------------------|
| R19, R23          |                  4.53 |                             0.5  |                          0.66 |
| R19, R23          |                  3.01 |                             0.75 |                          1    |
| R19, R23          |                  2.26 |                             0.99 |                          1.33 |
| R19, R23          |                  1.5  |                             1.5  |                          2    |

## Evaluates: MAX15162 (WLP)

## Table 4. DLY Pin-Strap Configuration

|   R14 (kΩ) | DELAY TIME   | AUTORETRY TIME   |
|------------|--------------|------------------|
|          0 | 12µs         | 0.6ms            |
|         27 | 100µs        | 6ms              |
|         47 | 1ms          | 60ms             |
|         68 | 10ms         | 600ms            |

## Component Suppliers

| SUPPLIER                  | WEBSITE                  |
|---------------------------|--------------------------|
| Analog Devices            | www.analog.com           |
| CoilCraft                 | www.coilcraft.com        |
| Comchip                   | www.comchiptech.com      |
| Diodes Incorporated       | www.diodes.com           |
| Emerson Network Power     | www.vertivco.com         |
| Fairchild Semiconductor   | www.onsemi.com           |
| Kemet                     | www.ir.kemet.com         |
| Keystone                  | www.keyelco.com          |
| Lite-On Electronics       | www.us.liteon.com        |
| Murata                    | www.murata.com           |
| On Semiconductor          | www.onsemi.com           |
| Panasonic                 | www.panasonic.com        |
| Pulse Electronics         | www.pulseelectronics.com |
| Renesas T echnology Group | www.renesas.com          |
| Samsung Electronics       | www.samsung.com          |
| Stackpole Electronics     | www.seielect.com         |
| Sumida                    | www.sumida.com           |
| T aiyo Yuden              | www.yuden.co.jp          |
| TDK                       | www.us.tdk.com           |
| TE Connectivity           | www.te.com               |
| T exas Instruments        | www.ti.com               |
| Vishay Dale               | www.vishay.com           |
| Würth Elektronik          | www.we-online.com        |

Note: Indicate that you are using the MAX15162AWE when contacting these component suppliers.

## Ordering Information

| PART             | TYPE                       |
|------------------|----------------------------|
| MAX15162WAEVKIT# | MAX15162 WLP (Auto-retry)  |
| MAX15162WLEVKIT# | MAX15162 WLP (Latched off) |

#Denotes RoHS compliant.

## Evaluates: MAX15162

(WLP)

## MAX15162 WLP EV Kit Bill of Materials

| PART                                 | QTY   | DESCRIPTION                                                                                         |
|--------------------------------------|-------|-----------------------------------------------------------------------------------------------------|
| C1                                   | 1     | 47µF ±20%, 100V; aluminum electrolytic capacitor (Case H13) Panasonic EEE-FK2A470AQ                 |
| C2, C5, C6, C10-C14                  | 8     | 4.7µF ±10%, 100V X7S ceramic capacitor (1210) TDK C3225X7S2A475K200AB                               |
| C3                                   | 1     | 1µF ±10%, 100V X7R ceramic capacitor (1206) Murata GRM31CR72A105KA01                                |
| GND, OUT1+, OUT1-, OUT2+, OUT2-, VIN | 6     | Soft Drawn Bus TYPE-S, 20AWG, Weico Wire, 9020 BUSS                                                 |
| IMON1, IMON2                         | 2     | Test Point; PIN DIA = 0.1 inch; Total Length = 0.3 inch; Board Hole = 0.04 inch; RED; Keystone 5000 |
| J4, J5, J8                           | 3     | Breakaway Connector, Male, Through Hole, 2 Pins, Sullins, PEC03SAAN                                 |
| R14                                  | 1     | 68kΩ ±1% Resistor (0402) Vishay CRCW040268K0FK                                                      |
| R19, R23                             | 2     | 3.01kΩ ±1% Resistor (0402) Vishay CRCW04023K01FK                                                    |
| U1                                   | 1     | Integrated Dual-Channel Circuit Breaker, WLP-16, MAX15162/MAX15162AAWE+                             |
| PCB                                  | 1     | PCB:MAX15162AWE+/MAX15162AAWE+                                                                      |
| C4, C7, C8, C15, C16                 | DNP   | 1µF ±10%, 100V X7R ceramic capacitor (1206) Murata GRM31CR72A105KA01                                |
| R24, R40                             | DNP   | 0Ω ±0% Resistor (0402) Vishay CRCW04020000Z0EDHP                                                    |
| R33                                  | DNP   | 0Ω ±0% Resistor (2512) Vishay CRCW25120000Z0EGHP                                                    |

## MAX15162AWE Evaluation Kit

## MAX15162AWE EV Kit Schematic

<!-- image -->

Evaluates: MAX15162

(WLP)

## MAX15162AWE EV Kit PCB Layout Diagrams

<!-- image -->

MAX15162AWE EV Kit PCB-Silkscreen Top Side

## Evaluates: MAX15162

(WLP)

## MAX15162AWE EV Kit PCB Layout Diagrams (continued)

MAX15162AWE EV Kit PCB-Top Side

<!-- image -->

Evaluates: MAX15162

(WLP)

## MAX15162AWE EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX15162AWE EV Kit PCB-Internal Layer 2

O

## MAX15162AWE EV Kit PCB Layout Diagrams (continued)

O

<!-- image -->

MAX15162AWE EV Kit PCB-Internal Layer 3

O

## Evaluates: MAX15162 (WLP)

## MAX15162AWE EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX15162AWE EV Kit PCB-Bottom Side

## Evaluates: MAX15162

(WLP)

## MAX15162AWE EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX15162AWE EV Kit PCB-Silkscreen Bottom Side

## Evaluates: MAX15162

(WLP)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------|-----------------|
|                 0 | 11/19           | Initial release               | -               |
|                 1 | 10/20           | Change to Rev B EV kit        | 2-12            |
|                 2 | 10/21           | Changed title to indicate WLP | All             |
|                 3 | 11/22           | Updated to match hardware     | 3, 5            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX15162AWE Evaluation Kit