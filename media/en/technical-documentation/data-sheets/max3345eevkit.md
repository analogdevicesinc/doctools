<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3345E evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX3345E USB level translator. The EV kit i ncludes    TSSOP  and  UCSP™  versions  of  the MAX3345E IC, which are configured as a master and slave unit,  respectively.  The  EV  kit  is  designed  to  be driven by the on-board single-ended/differential driver, or directly connected to a microcontroller (µC) or application-specific integrated circuit (ASIC).

UCSP is a trademark of Maxim Integrated Products, Inc.

| DESIGNATION        |   QTY | DESCRIPTION                                                                       |
|--------------------|-------|-----------------------------------------------------------------------------------|
| C1, C3             |     2 | 10µF ± 20%, 20V tantalum capacitors (B case) AVX TAJB106M020                      |
| C2, C4             |     2 | 10µF ± 20%, 10V tantalum capacitors (B case) AVX TAJB106M010 or AVX TAJB106M016   |
| C5-C14             |    10 | 1.0µF, 10V X7R ceramic capacitors (0603) TDK C1608X5R1A105K or TDK C1608X7R1A105K |
| D1                 |     1 | Green surface-mount LED                                                           |
| J1, J3             |     2 | 16-pin headers                                                                    |
| J2                 |     1 | USB A connector Assmann Electronics AU-Y1006                                      |
| J4                 |     1 | USB B connector Assmann Electronics AU-Y1007                                      |
| JU1, JU2, JU3, JU6 |     4 | 2-pin headers                                                                     |
| JU4, JU5, JU7-JU14 |    10 | 3-pin headers                                                                     |
| R1, R2             |     2 | 15k Ω ± 5% resistors (0603)                                                       |

## Features

- ♦ USB 1.1 Full-Speed Compliant (12Mbps)
- ♦ Single-Supply Operation
- ♦ Low-Profile (1.0mm max) Design
- ♦ On-Board Oscillator
- ♦ Included USB A-B Cable
- ♦ Jumper-Selectable Master/Slave Configuration
- ♦ Fully Assembled and Tested
- ♦ Also Evaluates MAX3344E

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE        |
|---------------|--------------|-------------------|
| MAX3345EEVKIT | 0°C to +70°C | 16 TSSOP, 16 UCSP |

Note: To evaluate the MAX3344E, request a MAX3344EEUD and a MAX3344EEBE free sample with the MAX3345EEVKIT.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                   |
|--------------------|-------|-----------------------------------------------------------------------------------------------|
| R3-R6              |     4 | 23.7 Ω ± 1% resistors (0603)                                                                  |
| R7                 |     1 | 620 Ω ± 5% resistor (1206)                                                                    |
| R8                 |     1 | 374k Ω ± 1% resistor (0603)                                                                   |
| R9                 |     1 | 750k Ω ± 1% resistor (0603)                                                                   |
| U1                 |     1 | MAX3345EEUE (16-pin TSSOP)                                                                    |
| U2                 |     1 | MAX3345EEBE (16-pin UCSP)                                                                     |
| U3                 |     1 | MAX603ESA (8-pin SO)                                                                          |
| U4                 |     1 | MAX604ESA (8-pin SO)                                                                          |
| U5                 |     1 | Fairchild NC7SZ14P5 (5-pin SC70)                                                              |
| U6                 |     1 | Fairchild NC7WZ17P6 (6-pin SC70)                                                              |
| U7                 |     1 | Fairchild NC7SZ05M5 (5-pin SOT23)                                                             |
| Y1                 |     1 | 6.000MHz crystal oscillator module                                                            |
| D+M, D-M, D+S, D-S |     4 | Scope probe connectors (3.5mm diameter) Tektronics 131-4244-00 [Qty 100] 131-5031-00 [Qty 25] |
| None               |    14 | Shunts (for JU1-JU14)                                                                         |
| None               |     1 | USB A-B cable (5ft or 1.5m)                                                                   |
| None               |     1 | MAX3345E EV kit PC board                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX3345E Evaluation Kit

Required equipment:

- DC power supply capable of supplying between +6V and +9V at 1A
- Oscilloscope (&gt;100MHz)
- Two 3.5mm scope probes
- Function generator capable of providing a 6MHz square wave with an amplitude of 1.8VP-P to 3.3VP-P

The MAX3345E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Ensure that the jumpers are in their default positions. See Table 1 for shunt positions.
- 2) Connect the positive output of the function generator to pin 8 of header J3.
- 3) Connect the ground of the function generator to pins 9 and 16 of header J3.
- 4) Connect the DC power supply to the user pads marked VSUP and GND.
- 5) Connect a scope probe to the D+M and the D-M scope jacks.
- 6) Set the DC power supply to +6V.
- 7) Turn on the DC power supply.
- 8) Plug the USB cable into the USB A socket.
- 9) Plug the other end of the USB cable into the USB B socket.
- 10) The green LED turns on, confirming that a connection between the master and slave has been made.
- 11) Turn on the function generator and set it to generate a 6MHz square wave, with an amplitude of 1.8VP-P.
- 12) Verify with the oscilloscope that a +3.3V differential signal is being received on the D+M and D-M lines.

Required equipment:

- DC power supply capable of supplying between +6V and +9V at 1A
- Oscilloscope (&gt;100MHz)
- Two 3.5mm scope probes

The MAX3345E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Suppliers

| SUPPLIER            | PHONE        | FAX          | WEBSITE               |
|---------------------|--------------|--------------|-----------------------|
| 3M                  | 888-364-3577 | 800-321-6329 | www.3m.com            |
| Assmann Electronics | 877-277-6266 | 480-897-7255 | www.usa-assmann.com   |
| AVX                 | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Fairchild           | 888-522-5372 | 408-721-1635 | www.fairchildsemi.com |
| TDK                 | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX3345E when contacting these component suppliers.

## Quick Start

## Slave Driving Master

## Table 1. Default Shunt Positions (Slave Driving Master)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU1      | ON               | 15k Ω resistor on D- line enabled                                |
| JU2      | ON               | 15k Ω resistor on D+ line enabled                                |
| JU3      | OFF              | Driver disconnected from VPO line of master (U1)                 |
| JU4      | OFF              | Driver disconnected from VMO line of master (U1)                 |
| JU5      | 1-2              | Secondary power supply set to 1.8V                               |
| JU6      | ON               | Secondary power supply connected to circuit                      |
| JU7      | 1-2              | Master receive selected                                          |
| JU8      | 2-3              | Internal 1.5k Ω resistor is disconnected from the master D+ line |
| JU9      | 1-2              | Master inputs in differential mode                               |
| JU10     | 2-3              | Master suspend disabled                                          |
| JU11     | 2-3              | Slave transmit selected                                          |
| JU12     | 1-2              | Internal 1.5k Ω resistor is disconnected from the slave D+ line  |
| JU13     | 2-3              | Slave inputs in single-ended mode                                |
| JU14     | 2-3              | Slave suspend disabled                                           |

## Master Driving Slave

## MAX3345E Evaluation Kit

- 1) Ensure that the jumpers are in their default positions. See Table 2 for shunt positions.
- 2) Connect the DC power supply to the user pads marked VSUP and GND.
- 3) Connect a scope probe to the D+S and the D-S scope jacks.
- 4) Set the DC power supply to +6V.
- 5) Turn on the DC power supply.
- 6) Plug the USB cable into the USB A socket.
- 7) Plug the other end of the USB cable into the USB B socket.
- 8) The green LED turns on, confirming that a connection between the master and slave has been made.
- 9) Verify with the oscilloscope that a +3.3V differential signal is being received on the D+S and D-S lines.

## Detailed Description

The MAX3345E EV kit provides a proven PC board layout to evaluate the MAX3345E. When connecting the MAX3345E EV kit to an ASIC or µC, it must be interfaced to appropriate timing signals for proper operation.

## Table 2. Shunt Positions (Master Driving Slave)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU1      | ON               | 15k Ω resistor on D- line enabled                                |
| JU2      | ON               | 15k Ω resistor on D+ line enabled                                |
| JU3      | OFF              | Driver disconnected from VPO line of master (U1)                 |
| JU4      | OFF              | Driver disconnected from VMO line of master (U1)                 |
| JU5      | 1-2              | Secondary power supply set to 1.8V                               |
| JU6      | ON               | Secondary power supply connected to circuit                      |
| JU7      | 1-2              | Master receive selected                                          |
| JU8      | 2-3              | Internal 1.5k Ω resistor is disconnected from the master D+ line |
| JU9      | 1-2              | Master inputs in differential mode                               |
| JU10     | 2-3              | Master suspend disabled                                          |
| JU11     | 2-3              | Slave transmit selected                                          |
| JU12     | 1-2              | Internal 1.5k Ω resistor is disconnected from the slave D+ line  |
| JU13     | 2-3              | Slave inputs in single-ended mode                                |
| JU14     | 2-3              | Slave suspend disabled                                           |

<!-- image -->

Connect the DC power supply to the VSUP pad, and connect the ground return to the GND pad. See the MAX3344E/MAX3345E EV kit schematic (Figure 1). Refer to the MAX3344E/MAX3345E data sheet for timing requirements.

## On-Board Single-Ended/Differential Driver

The MAX3345E EV kit is shipped with an on-board (master driving slave) single-ended/differential driver. This driver is used to evaluate the MAX3345E's switching characteristics without the user providing their own µC or ASIC. The signal is provided by a crystal oscillator (Y1), which is fed into an inverter (U5) and a buffer (U6) with Schmitt trigger inputs. The buffer has been added to equalize the propagation delays from the crystal oscillator to the differential inputs VPO and VMO. Jumpers JU3 and JU4 control the operation of the on-board driver. See Table 3 for shunt positions.

Note: When operated in differential mode, the on-board differential  driver  may generate a small skew between the  D+/D- lines. For improved performance, drive the VPO and VMO pins of the MAX3345E with a precision differential  data  source  at  pins  J1-8  (VPO)  and  J1-9 (VMO).

## On-Board Power Supplies

The MAX3345E EV kit contains two on-board power supplies, that take an unregulated voltage of +6V to +9V DC and produce a regulated +5V (500mA max) and a jumper-selectable regulated +1.8V/+3.3V (500mA max). The +5V supply powers the USB bus, while the +1.8V/ +3.3V supply is an alternative to a user-supplied µC/ASIC logic power supply. Jumpers JU5 and JU6 control the +1.8V/+3.3V power supply. See Table 4 for shunt positions.

Table 3. On-Board Driver Jumper

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                        |
|----------|------------------|----------------------------------------------------|
| JU3 JU4  | OFF OFF          | Driver is disconnected from circuit                |
| JU3 JU4  | OFF 2-3          | VPO is left for the user to drive, VMO is grounded |
| JU3 JU4  | OFF 1-2          | Invalid jumper setting                             |
| JU3 JU4  | ON 1-2           | Driver is operating in differential mode           |
| JU3 JU4  | ON 2-3           | Driver is operating in single-ended mode           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3345E Evaluation Kit

## Table 4. 1.8V/3.3V Power-Supply Jumper

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                    |
|----------|------------------|----------------------------------------------------------------------------------------------------------------|
| JU5      | 1-2              | Output voltage is +1.8V                                                                                        |
| JU5      | 2-3              | Output voltage is +3.3V                                                                                        |
| JU6      | ON               | Power supply connected to circuit                                                                              |
| JU6      | OFF              | Power supply disconnected from circuit. NOTE: User must supply power through the user pads marked VUP and GND. |

## On-Board Resistive Loads

The MAX3345E EV kit also contains two built-in 15k Ω loads, which are located on the D+ and D- lines of the master IC (U1). Jumpers JU1 and JU2 connect these loads to the line. See Table 5 for shunt positions.

Table 5. Resistive Load Jumper

| JUMPER   | SHUNT POSITION   | DESCRIPTION                    |
|----------|------------------|--------------------------------|
| JU1, JU2 | ON               | Master resistive load enabled  |
| JU1, JU2 | OFF              | Master resistive load disabled |

## IC Control Jumpers

The MAX3345E EV kit contains jumpers, which allow the user to manipulate various functions on both the master and slave (U1 and U2). Jumpers JU7 through JU14 set the output enable, enumerate, mode, and suspend functions on the master and slave (U1 and U2), respectively.

## Suspend Mode

Jumpers JU10 and JU14 control the suspend function on the master and slave. See Table 6 for shunt positions.

## Table 6. Suspend Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                             |
|----------|------------------|-----------------------------------------|
| JU10     | 1-2              | Suspend function on master enabled      |
| JU10     | 2-3              | Suspend function on master disabled     |
| JU14     | 1-2              | Suspend function mode on slave enabled  |
| JU14     | 2-3              | Suspend function mode on slave disabled |

## Mode Select

Jumpers JU9 and JU13 control the mode functions on the master and slave. See Table 7 for shunt positions.

## Table 7. Mode Select Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                   |
|----------|------------------|-----------------------------------------------|
| JU9      | 1-2              | Master inputs (VPO and VMO) differential mode |
| JU9      | 2-3              | Master inputs (VPO and VMO) single-ended mode |
| JU13     | 1-2              | Slave inputs (VPO and VMO) differential mode  |
| JU13     | 2-3              | Slave inputs (VPO and VMO) single-ended mode  |

## Enumerate Jumper Settings

Jumper JU8 connects an internal 1.5k Ω pullup resistor from the master D+ line to +3.3V. Jumper JU12 connects an internal 1.5k Ω pullup resistor from the slave D+ line to +3.3V. See Table 8 for shunt positions.

## Table 8. Enumerate Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                              |
|----------|------------------|--------------------------------------------------------------------------|
| JU8      | 1-2              | 1.5k Ω resistor is connected to the master D+ line                       |
| JU8      | 2-3              | 1.5k Ω resistor is disconnected from the master D+ line                  |
| JU12     | 1-2              | 1.5k Ω resistor is connected to the slave D+ line (full-speed operation) |
| JU12     | 2-3              | 1.5k Ω resistor is disconnected from the slave D+ line                   |

Note:

The MAX3345E is not compatible with low-speed devices.

## Output Enable Jumper Settings

The output enable jumper selects between a transmit mode or receive mode. Jumpers JU7 and JU11 control the output enable for the master and slave. See Table 9 for shunt positions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3345E Evaluation Kit

## Evaluating the MAX3344E

The MAX3345E EV kit is also capable of evaluating the pin-compatible MAX3344E. To evaluate the MAX3344E, replace U1 with a MAX3344EEUD and replace U2 with a MAX3344EEBE.

## Table 9. Output Enable Jumper Settings

## 16-Pin Data Connectors J1, J3

The MAX3345E EV kit contains two 16-pin headers for interfacing with an ASIC or µC. Table 10 lists the function  of  each  pin.  Each  header is identical with the exception that J1 is connected to the master (U1) and J3 is connected to the slave (U2). Use a 3M connector with part number CHG-1016-001010-KEP (or equivalent) to interface with this header. See the Component Suppliers section for contact information. Inputs and outputs are relative to the EV kit.

## Table 10. J1, J3 Data Connector

| PIN   | SIGNAL    | I/O   | FUNCTION                                                                                                                         |
|-------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------|
| 1     | SUSPEND   | I     | 0 = normal operation 1 = suspend operation                                                                                       |
| 2     | RCV       | O     | Receiver output (single-ended)                                                                                                   |
| 3     | VPI       | O     | Single-ended output (D+)                                                                                                         |
| 4     | VMI       | O     | Single-ended output (D-)                                                                                                         |
| 5     | USB_DET   | O     | USB detect: 0 = device is not connected to the USB bus 1 = device is connected to the USB bus                                    |
| 6     | MODE      | I     | Mode: 0 = VPO/VMO operate as single-ended inputs 1 = VPO/VMO operate as differential inputs                                      |
| 7     | ENUMERATE | I     | Enumerate: 0 = 1.5k Ω resistor disconnected from the D+ line 1 = 1.5k Ω resistor connected to the D+ line (full-speed operation) |
| 8     | VPO       | I     | Single-ended input (D+)                                                                                                          |
| 9     | VMO       | I     | Single-ended input (D-)                                                                                                          |
| 10    | OE        | I     | Output enable: 0 = transmitter enabled 1 = transmitter disabled                                                                  |
| 11    | V L       | -     | +1.8V/+3.3V on-board power supply                                                                                                |
| 12-16 | GND       | -     | Ground                                                                                                                           |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU7      | 1-2              | Master receive selected  |
| JU7      | 2-3              | Master transmit selected |
| JU11     | 1-2              | Slave receive selected   |
| JU11     | 2-3              | Slave transmit selected  |

## MAX3345E Evaluation Kit

Figure 1. MAX3345E EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3345E Evaluation Kit

<!-- image -->

Figure 1. MAX3345E EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3345E Evaluation Kit

Figure 1. MAX3345E EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3345E Evaluation Kit

Figure 2. MAX3345E EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX3345E EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX3344E/MAX3345E

## MAX3345E Evaluation Kit

Figure 4. MAX3345E EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.