import React from "react";

function FancyBorder(props: { color: string; children: React.ReactNode }) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function Contacts() {
  return <div className="Contacts">Contacts </div>;
}

function Chat() {
  return <div className="Chat"> Chat </div>;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function PanelTest() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  );
}

//Specialization
export function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!">
      <PanelTest />
    </Dialog>
  );
}
